import React from "react";
import { HStack, Text, IconButton, useColorMode, Box } from "native-base";
import { Feather } from "@expo/vector-icons";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box safeAreaTop bg={colorMode === "dark" ? "dark.bg" : "light.bg"}>
      <HStack px="4" py="3" justifyContent="space-between" alignItems="center">
        <Text
          fontSize="24"
          fontWeight="bold"
          color={colorMode === "dark" ? "white" : "black"}
        >
          Explore<Text color="primary.500">.</Text>
        </Text>
        <IconButton
          icon={
            <Feather
              name={colorMode === "dark" ? "sun" : "moon"}
              size={24}
              color={colorMode === "dark" ? "white" : "black"}
            />
          }
          onPress={toggleColorMode}
          variant="ghost"
          _hover={{
            bg: colorMode === "dark" ? "dark.searchBg" : "light.searchBg",
          }}
        />
      </HStack>
    </Box>
  );
};
