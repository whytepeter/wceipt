"use client";
import { createTheme } from "@mui/material/styles";

// Optional: Define custom theme variables

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B4946",
      light: "#48B3AB",
    },
    secondary: {
      main: "#76172F",
      light: "#BC2747",
    },

    // ... other palette configurations
  },
});

export default theme;
