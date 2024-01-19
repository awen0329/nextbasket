"use client";
import { Stack, styled } from "@mui/material";

const NavbarContainer = styled(Stack)({
  height: "58px",
  padding: "9px 24px 3px 24px",
});

export default function HomeNavbar() {
  const display = true;

  return (
    <NavbarContainer
      height={
        display ? { xs: "auto", md: "var(--nav-height)" } : { xs: 0, md: 0 }
      }
      padding={
        display ? { xs: "98px", md: "var(--nav-padding-x)" } : { xs: 0, md: 0 }
      }
      sx={{
        opacity: display ? "100%" : "0%",
        pointerEvents: display ? "auto" : "none",
        transition: "all",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "300ms",
      }}
    >
      {/* <NavLinkList links={navLang} /> */}
    </NavbarContainer>
  );
}
