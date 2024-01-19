"use client";

import { productOtherDetail } from "@/lib/fake/productOtherDetail";
import OtherDetailImage from "@/assets/images/bg/otherDetail.jpeg";
import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";

export default function OthersSection() {
  const { title, articles } = productOtherDetail;
  return (
    <Container maxWidth="lg" sx={{ display: { xs: "none", md: "flex" } }}>
      <Box
        display="flex"
        alignItems={{ xs: "center", lg: "flex-start" }}
        flexDirection={{ lg: "row" }}
        gap="30px"
        p="24px 48px 48px 48px"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", lg: "flex-start" }}
          sx={{
            gap: "30px",
            paddingBottom: "25px",
            width: { xs: "100%", md: "70%" },
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {articles[0]}
          </Typography>
          <Box
            sx={{
              paddingLeft: "24px",
              borderLeft: "3px solid",
              borderLeftColor: "secondary.main",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {articles[1]}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {articles[2]}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: { xs: "295px", md: "413px" },
            height: { xs: "321px", md: "372px" },
            "& :where(img)": { borderRadius: "5.386px" },
          }}
        >
          <Image
            src={OtherDetailImage.src}
            alt="Other details"
            fill
            sizes="(max-width: 600px) 100%, 295px"
          />
        </Box>
      </Box>
    </Container>
  );
}
4848;
