"use client";

import { Box, Container } from "@mui/material";
import HooliIcon from "@/assets/svgs/hooli.svg";
import LyftIcon from "@/assets/svgs/robinhood.svg";
import StripeIcon from "@/assets/svgs/stripe.svg";
import RobinhoodIcon from "@/assets/svgs/robinhood.svg";
import AWSIcon from "@/assets/svgs/aws.svg";
import RedditIcon from "@/assets/svgs/reddit.svg";

export default function PartnersSection() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: { xs: "110px 0 111px", sm: "50px 45px", lg: "50px 195px" },
        backgroundColor: "background.lightGray",
      }}
    >
      <Box
        sx={{
          display: "grid",
          justifyItems: "center",
          alignItems: "center",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(3, minmax(0, 1fr))",
            md: "repeat(6, minmax(0, 1fr))",
          },
          gap: { xs: "60px", md: "30px" },
        }}
      >
        <HooliIcon />
        <LyftIcon />
        <RobinhoodIcon />
        <StripeIcon />
        <AWSIcon />
        <RedditIcon />
      </Box>
    </Container>
  );
}
