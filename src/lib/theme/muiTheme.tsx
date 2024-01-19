"use client";
import { ThemeProvider, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeText {
    blur: string;
    light: string;
    success: string;
    danger: string;
    alert: string;
    grayText1: string;
  }

  interface TypeBackground {
    light: string;
    gray: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    lightGray: string;
    overlay: string;
  }
}

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiStack: {
      defaultProps: {
        direction: "row",
        alignItems: "center",
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: "span",
          body2: "p",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#23A6F0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#23856D",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
      light: "#FFFFFF",
      blur: "#BDBDBD",
      success: "#2DC071",
      danger: "#E74040",
      disabled: "#8EC2F2",
      grayText1: "#858585",
      alert: "#E77C40",
    },
    background: {
      light: "#FFFFFF",
      gray: "#C4C4C4",
      gray1: "#E6E6E6",
      gray2: "#F9F9F9",
      gray3: "#E8E8E8",
      gray4: "#ECECEC",
      lightGray: "#FAFAFA",
      overlay: "#0e1224b3",
    },
  },
  typography: {
    h2: {
      fontFamily: "inherit",
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontFamily: "inherit",
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontFamily: "inherit",
      fontSize: 20,
      fontWeight: 400,
    },
    h5: {
      fontFamily: "inherit",
      fontSize: 16,
      fontWeight: 700,
    },
    h6: {
      fontFamily: "inherit",
      fontSize: 14,
      fontWeight: 700,
    },
    body1: {
      fontFamily: "inherit",
      fontSize: 14,
      fontWeight: 400,
    },
    body2: {
      fontFamily: "inherit",
      fontSize: 14,
      fontWeight: 400,
    },
    allVariants: {
      fontFamily: "inherit",
      fontSize: 14,
    },
  },
});

export default function MuiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
