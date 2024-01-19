import { Link as MuiLink, SxProps, Theme } from "@mui/material";
import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export default function Link({
  href,
  sx,
  children,
  ...rest
}: LinkProps & Record<string, any>) {
  return (
    <MuiLink href={href} component={NextLink} sx={sx} {...rest}>
      {children}
    </MuiLink>
  );
}
