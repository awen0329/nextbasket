"use client";

import { Box, Container, Grid } from "@mui/material";
import FurnitureImage1 from "@/assets/images/furnitures/furniture-1.jpg";
import FurnitureImage2 from "@/assets/images/furnitures/furniture-2.jpg";
import FurnitureImage3 from "@/assets/images/furnitures/furniture-3.jpg";
import FurnitureImage4 from "@/assets/images/furnitures/furniture-4.jpg";
import TextContents from "./textContents";
import Image from "next/image";

export default function FurnitureSection() {
  return (
    <Container maxWidth="lg">
      <Box
        p={{ md: "80px 3px", xs: "24px 40px" }}
        display="flex"
        gap={2}
        flexDirection={{ md: "row", xs: "column" }}
      >
        <Box
          maxWidth={{ lg: "451px", xs: "100%" }}
          width="100%"
          minHeight={300}
          sx={{
            backgroundImage: `url(${FurnitureImage1.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <TextContents middleTypoSx={{ fontSize: "40px" }} />
        </Box>
        <Grid container sx={{ flexGrow: 1 }} spacing={2}>
          <Grid item xs={12}>
            <Box
              height="300px"
              flexShrink={0}
              sx={{
                backgroundImage: `url(${FurnitureImage2.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <TextContents />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              height="300px"
              flexShrink={0}
              sx={{
                backgroundImage: `url(${FurnitureImage3.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <TextContents />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              height="300px"
              flexShrink={0}
              sx={{
                backgroundImage: `url(${FurnitureImage4.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <TextContents />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
