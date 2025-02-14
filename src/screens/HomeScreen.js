import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { Box, useColorMode } from "native-base";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { CountryListItem } from "../components/CountryListItem";
import { AlphabetDivider } from "../components/AlphabetDivider";

export const HomeScreen = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,coatOfArms,population,region,capital,subregion,languages,currencies,area,timezones,continents,startOfWeek,car,unMember,independent,cca3"
      );
      const data = await response.json();
      const sortedData = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      // Process data to include section headers
      const processedData = [];
      let currentLetter = "";

      sortedData.forEach((country) => {
        const firstLetter = country.name.common[0].toUpperCase();
        if (firstLetter !== currentLetter) {
          currentLetter = firstLetter;
          processedData.push({
            type: "header",
            letter: currentLetter,
            id: `header-${currentLetter}`,
          });
        }
        processedData.push({
          type: "country",
          data: country,
          id: country.cca3,
        });
      });

      setCountries(processedData);
      setFilteredCountries(processedData);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleSearch = (text) => {
    const filtered = countries.filter((item) => {
      if (item.type === "header") return false;
      return (
        item.data.name.common.toLowerCase().includes(text.toLowerCase()) ||
        (item.data.capital?.[0] || "")
          .toLowerCase()
          .includes(text.toLowerCase())
      );
    });

    // Reprocess filtered data to include headers
    const processedFiltered = [];
    let currentLetter = "";

    filtered.forEach((item) => {
      const firstLetter = item.data.name.common[0].toUpperCase();
      if (firstLetter !== currentLetter) {
        currentLetter = firstLetter;
        processedFiltered.push({
          type: "header",
          letter: currentLetter,
          id: `header-${currentLetter}`,
        });
      }
      processedFiltered.push(item);
    });

    setFilteredCountries(processedFiltered);
  };

  const handleFilter = () => {
    // Implement filter functionality
    console.log("Filter pressed");
  };

  const renderItem = ({ item }) => {
    if (item.type === "header") {
      return <AlphabetDivider letter={item.letter} />;
    }
    return (
      <CountryListItem
        country={item.data}
        onPress={(country) =>
          navigation.navigate("CountryDetails", { country })
        }
      />
    );
  };

  return (
    <Box flex={1} bg={colorMode === "dark" ? "dark.bg" : "light.bg"}>
      <Header />
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      <FlatList
        data={filteredCountries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};
