"use client";
import { Stack, styled } from "@mui/material";
import Top from "./top";
import Bottom from "./bottom";

const NavbarContainer = styled(Stack)({
  height: "58px",
  padding: "9px 24px 3px 24px",
});

export default function Header() {
  return (
    <>
      <Top />
      <Bottom />
    </>
  );
}
