import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  ScrollView,
  HStack,
  VStack,
  IconButton,
  useColorMode,
  Pressable,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const DetailRow = ({ label, value }) => {
  const { colorMode } = useColorMode();
  return (
    <HStack space="2" py="2">
      <Text
        w="40%"
        color={colorMode === "dark" ? "gray.300" : "gray.600"}
        fontSize="16"
      >
        {label}:
      </Text>
      <Text
        flex={1}
        color={colorMode === "dark" ? "white" : "black"}
        fontSize="16"
        fontWeight="medium"
      >
        {value}
      </Text>
    </HStack>
  );
};

export const CountryDetails = ({ navigation, route }) => {
  const { country } = route.params;
  const { colorMode } = useColorMode();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Debug log to see the country data
  console.log("Country Data in Details:", JSON.stringify(country, null, 2));

  // Prepare images array with both flag and coat of arms if available
  const images = [];
  if (country?.flags?.png) {
    images.push(country.flags.png);
  }
  if (country?.coatOfArms?.png) {
    images.push(country.coatOfArms.png);
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const formatPopulation = (pop) => {
    if (!pop) return "N/A";
    return pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatArea = (area) => {
    if (!area) return "N/A";
    return `${area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} km²`;
  };

  const getLanguages = () => {
    if (!country?.languages) return "N/A";
    return Object.entries(country.languages)
      .map(([code, name]) => name)
      .join(", ");
  };

  const getCurrencies = () => {
    if (!country?.currencies) return "N/A";
    return Object.entries(country.currencies)
      .map(([code, curr]) => `${curr.name} (${curr.symbol || code})`)
      .join(", ");
  };

  return (
    <Box flex={1} bg={colorMode === "dark" ? "dark.bg" : "light.bg"}>
      {/* Header */}
      <HStack
        px="4"
        py="3"
        alignItems="center"
        safeAreaTop
        bg={colorMode === "dark" ? "dark.bg" : "light.bg"}
      >
        <IconButton
          icon={
            <Feather
              name="arrow-left"
              size={24}
              color={colorMode === "dark" ? "white" : "black"}
            />
          }
          onPress={() => navigation.goBack()}
        />
        <Text
          flex={1}
          fontSize="20"
          fontWeight="bold"
          textAlign="center"
          color={colorMode === "dark" ? "white" : "black"}
        >
          {country?.name?.common || "Country Details"}
        </Text>
        <Box w="10" /> {/* Spacer for alignment */}
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Flag Carousel */}
        {images.length > 0 && (
          <Box position="relative">
            <Image
              source={{ uri: images[currentImageIndex] }}
              alt={
                country?.flags?.alt || country?.name?.common || "Country flag"
              }
              w={width}
              h={200}
              resizeMode="cover"
            />

            {images.length > 1 && (
              <>
                <Pressable
                  position="absolute"
                  left="2"
                  top="50%"
                  p="3"
                  onPress={handlePrevImage}
                >
                  <Feather
                    name="chevron-left"
                    size={24}
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                </Pressable>

                <Pressable
                  position="absolute"
                  right="2"
                  top="50%"
                  p="3"
                  onPress={handleNextImage}
                >
                  <Feather
                    name="chevron-right"
                    size={24}
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                </Pressable>

                <HStack
                  position="absolute"
                  bottom="2"
                  w="full"
                  justifyContent="center"
                  space="1"
                >
                  {images.map((_, index) => (
                    <Box
                      key={index}
                      w="2"
                      h="2"
                      rounded="full"
                      bg={
                        index === currentImageIndex
                          ? "white"
                          : "rgba(255, 255, 255, 0.5)"
                      }
                    />
                  ))}
                </HStack>
              </>
            )}
          </Box>
        )}

        {/* Country Details */}
        <VStack px="4" py="4" space="2">
          <DetailRow
            label="Population"
            value={formatPopulation(country?.population)}
          />
          <DetailRow label="Region" value={country?.region || "N/A"} />
          <DetailRow label="Capital" value={country?.capital?.[0] || "N/A"} />
          <DetailRow label="Subregion" value={country?.subregion || "N/A"} />
          <DetailRow label="Languages" value={getLanguages()} />
          <DetailRow label="Currencies" value={getCurrencies()} />
          <DetailRow label="Area" value={formatArea(country?.area)} />
          <DetailRow
            label="Time zones"
            value={country?.timezones?.join(", ") || "N/A"}
          />
          <DetailRow
            label="Continent"
            value={country?.continents?.join(", ") || "N/A"}
          />
          <DetailRow
            label="Start of week"
            value={
              country?.startOfWeek
                ? country.startOfWeek.charAt(0).toUpperCase() +
                  country.startOfWeek.slice(1)
                : "N/A"
            }
          />
          <DetailRow
            label="Driving side"
            value={
              country?.car?.side
                ? country.car.side.charAt(0).toUpperCase() +
                  country.car.side.slice(1)
                : "N/A"
            }
          />
          <DetailRow
            label="UN Member"
            value={country?.unMember ? "Yes" : "No"}
          />
          <DetailRow
            label="Independent"
            value={country?.independent ? "Yes" : "No"}
          />
        </VStack>
      </ScrollView>
    </Box>
  );
};
