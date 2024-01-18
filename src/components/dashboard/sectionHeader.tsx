import { Stack, Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}
export default function SectionHeader({
  title,
  subtitle,
  description,
}: SectionHeaderProps) {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        gap: "10px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        color="text.secondary"
        sx={{ width: { lg: "auto", xs: "260px" } }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h3"
        color="text.primary"
        textTransform="uppercase"
        letterSpacing={0.1}
        lineHeight="32px"
        sx={{ width: { lg: "auto", xs: "260px" } }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ width: { lg: "auto", xs: "260px" } }}
      >
        {description}
      </Typography>
    </Stack>
  );
}
