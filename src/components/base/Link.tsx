import { Link as MuiLink, SxProps, Theme } from "@mui/material";
import NextLink from "next/link";
import { ReactNode } from "react";
import ArrowDownIcon from "@/assets/svgs/chevronDown.svg";

interface LinkProps {
  href: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
  isDropdown?: boolean;
}

export default function Link({
  href,
  sx,
  children,
  isDropdown,
  ...rest
}: LinkProps & Record<string, any>) {
  return (
    <MuiLink
      href={href}
      component={NextLink}
      sx={{
        display: "flex",
        gap: "9px",
        alignItems: "center",
        ...sx,
      }}
      {...rest}
    >
      {children}
      {isDropdown ? <ArrowDownIcon /> : null}
    </MuiLink>
  );
}
