import React from "react";
import { HStack, Text, Image, Pressable, useColorMode, Box } from "native-base";
import { Feather } from "@expo/vector-icons";

export const CountryListItem = ({ country, onPress }) => {
  const { colorMode } = useColorMode();

  return (
    <Pressable onPress={() => onPress(country)}>
      <HStack
        space="3"
        py="3"
        px="4"
        alignItems="center"
        bg={colorMode === "dark" ? "dark.bg" : "light.bg"}
      >
        <Image
          source={{ uri: country.flags.png }}
          alt={country.name.common}
          size="45px"
          rounded="sm"
        />
        <Box flex={1}>
          <Text
            fontSize="16"
            fontWeight="medium"
            color={colorMode === "dark" ? "white" : "black"}
          >
            {country.name.common}
          </Text>
          <Text
            fontSize="14"
            color={colorMode === "dark" ? "gray.400" : "gray.500"}
          >
            {country.capital?.[0] || "N/A"}
          </Text>
        </Box>
        <Box
          bg={colorMode === "dark" ? "dark.searchBg" : "light.searchBg"}
          p="2"
          rounded="full"
        >
          <Feather
            name="chevron-right"
            size={20}
            color={colorMode === "dark" ? "#fff" : "#000"}
          />
        </Box>
      </HStack>
    </Pressable>
  );
};
