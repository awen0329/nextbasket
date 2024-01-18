import { Box, Typography } from "@mui/material";
import React from "react";

interface ServiceSectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceSectionCard({
  icon,
  title,
  description,
}: ServiceSectionCardProps) {
  return (
    <Box
      sx={{
        p: "35px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {icon}
      <Typography
        variant="h3"
        lineHeight={1.5}
        letterSpacing={0.1}
        color="text.primary"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        lineHeight="20px"
        letterSpacing={0.2}
        color="text.secondary"
        textAlign="center"
      >
        {description}
      </Typography>
    </Box>
  );
}
