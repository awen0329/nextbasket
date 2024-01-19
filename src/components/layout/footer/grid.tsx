import { Box, styled } from "@mui/material";

const FooterGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: "30px",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    padding: "70px 24px",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    padding: "50px 51px",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
  },
}));

export default FooterGrid;
