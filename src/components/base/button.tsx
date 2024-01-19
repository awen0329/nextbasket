import { Button, ButtonProps } from "@mui/material";

export default function CustomizedButton({
  children,
  sx,
  ...rest
}: ButtonProps) {
  return (
    <Button
      disableElevation
      sx={{
        p: "15px 40px",
        fontWeight: 700,
        fontSize: "14px",
        letterSpacing: 0.2,
        lineHeight: "22px",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
