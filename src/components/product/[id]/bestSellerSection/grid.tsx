"use client";

import { Container, styled } from "@mui/material";

const LayoutGrid = styled(Container)(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    gap: "70px",
    padding: "48px 40px",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "48px 30px",
    padding: "48px 40px",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    padding: "48px 57px",
  },
}));

export default LayoutGrid;
