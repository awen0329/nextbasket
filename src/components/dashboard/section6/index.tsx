"use client";

import { Box, Typography } from "@mui/material";
import BackgroundImage from "@/assets/images/bg/designExp.jpeg";
import CustomizedButton from "@/components/base/Button";

export default function BetterExperienceSection() {
  return (
    <Box
      display="flex"
      p={{ md: "160px 195px 112px 195px", xs: "112px 40px" }}
      justifyContent="center"
      sx={{
        background: `url(${BackgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="30px"
        textAlign="center"
        alignItems="center"
        maxWidth="570px"
      >
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          Designing Better Experience
        </Typography>
        <Typography variant="h2">
          Problems trying to resolve the conflict between
        </Typography>
        <Typography variant="body2">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>
        <Typography variant="h3" sx={{ color: "secondary.main" }}>
          $16.48
        </Typography>
        <CustomizedButton
          variant="contained"
          sx={{
            maxWidth: "292px",
          }}
        >
          ADD YOUR CALL TO ACTION
        </CustomizedButton>
      </Box>
    </Box>
  );
}
