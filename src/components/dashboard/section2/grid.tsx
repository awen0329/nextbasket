"use client";

import { Container, styled } from "@mui/material";

const LayoutGrid = styled(Container)(({ theme }) => ({
  display: "grid",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    gap: "70px",
    padding: "56px 40px",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "56px 30px",
    padding: "56px 40px",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    padding: "56px 57px",
  },
}));

export default LayoutGrid;
