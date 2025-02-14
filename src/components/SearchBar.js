import React from "react";
import {
  HStack,
  Input,
  IconButton,
  useColorMode,
  Box,
  Button,
  Icon,
} from "native-base";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export const SearchBar = ({ onSearch, onFilter }) => {
  const { colorMode } = useColorMode();

  return (
    <Box px="4" py="2">
      <Input
        placeholder="Search Country"
        bg={colorMode === "dark" ? "dark.searchBg" : "light.searchBg"}
        borderWidth="0"
        fontSize="14"
        height="45"
        InputLeftElement={
          <Icon
            as={<Feather name="search" />}
            size="sm"
            ml="3"
            color={colorMode === "dark" ? "gray.400" : "gray.500"}
          />
        }
        color={colorMode === "dark" ? "white" : "black"}
        _focus={{
          bg: colorMode === "dark" ? "dark.searchBg" : "light.searchBg",
        }}
        onChangeText={onSearch}
      />

      <HStack space="2" mt="3" alignItems="center">
        <Button
          leftIcon={<Icon as={<MaterialIcons name="language" />} size="sm" />}
          variant="ghost"
          _text={{ color: colorMode === "dark" ? "white" : "black" }}
          px="3"
        >
          EN
        </Button>

        <Button
          leftIcon={<Icon as={<Feather name="filter" />} size="sm" />}
          variant="ghost"
          _text={{ color: colorMode === "dark" ? "white" : "black" }}
          onPress={onFilter}
          px="3"
        >
          Filter
        </Button>
      </HStack>
    </Box>
  );
};
