import Link from "@/components/base/Link";
import { Box, SxProps, Typography } from "@mui/material";
import React from "react";

interface TextContentsProps {
  top?: React.ReactNode;
  middle?: React.ReactNode;
  bottom?: React.ReactNode;
  middleTypoSx?: SxProps;
}

export default function TextContents({
  top = "5 items",
  middle = "Furniture",
  bottom = "Read More",
  middleTypoSx,
}: TextContentsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "5px",
        padding: "24px",
        zIndex: 10,
      }}
    >
      <Typography variant="h6" sx={{ color: "text.success" }}>
        {top}
      </Typography>
      <Typography variant="h3" sx={{ color: "text.primary", ...middleTypoSx }}>
        {middle}
      </Typography>
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: 700,
          "&:hover ": { color: "primary.main" },
        }}
      >
        {bottom}
      </Typography>
    </Box>
  );
}
