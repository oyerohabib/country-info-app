import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    light: {
      bg: "#FFFFFF",
      text: "#1A1A1A",
      searchBg: "#F5F5F5",
      border: "#E5E5E5",
    },
    dark: {
      bg: "#1A1A1A",
      text: "#FFFFFF",
      searchBg: "#2A2A2A",
      border: "#404040",
    },
  },
  config: {
    initialColorMode: "light",
  },
  fonts: {
    heading: undefined,
    body: undefined,
  },
  components: {
    Text: {
      baseStyle: ({ colorMode }) => ({
        color: colorMode === "dark" ? "white" : "black",
      }),
    },
  },
});

// Color mode utilities
export const useColorScheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return {
    isDark: colorMode === "dark",
    toggleColorMode,
    colorMode,
  };
};
