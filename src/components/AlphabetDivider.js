import React from "react";
import { Text, useColorMode, Box } from "native-base";

export const AlphabetDivider = ({ letter }) => {
  const { colorMode } = useColorMode();

  return (
    <Box px="4" py="2" bg={colorMode === "dark" ? "dark.bg" : "light.bg"}>
      <Text
        fontSize="16"
        fontWeight="bold"
        color={colorMode === "dark" ? "white" : "black"}
      >
        {letter}
      </Text>
    </Box>
  );
};
