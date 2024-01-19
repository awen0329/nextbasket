import { Box } from "@mui/material";

export default function Elipse({
  radius,
  color,
}: {
  radius: number;
  color: string;
}) {
  return (
    <Box
      width={`${radius}px`}
      height={`${radius}px`}
      borderRadius={`${radius}px`}
      bgcolor={color}
    />
  );
}
