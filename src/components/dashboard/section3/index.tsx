"use client";

import { Box, Container, Grid } from "@mui/material";
import SectionHeader from "../sectionHeader";
import ServiceSectionCard from "./card";

import EasyWinsIcon from "@/assets/svgs/bookReader.svg";
import ConcreteIcon from "@/assets/svgs/book.svg";
import GrowthIcon from "@/assets/svgs/arrowGrowth.svg";

export function BestServiceSection() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: "80px",
        }}
      >
        <SectionHeader
          title="The Best Services"
          subtitle="Featured Products"
          description="Problems trying to resolve the conflict between"
        />
        <Grid
          container
          mt={10}
          display="flex"
          sx={{ gap: { md: 0, xs: "30px" } }}
        >
          <Grid item xs={12} lg={4}>
            <ServiceSectionCard
              icon={<EasyWinsIcon />}
              title="Easy Wins"
              description="Get your best looking smile now!"
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ServiceSectionCard
              icon={<ConcreteIcon />}
              title="Concrete"
              description="Defalcate is most focused in helping you discover your most beautiful smile."
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ServiceSectionCard
              icon={<GrowthIcon />}
              title="Hack Growth"
              description="Overcame any hurdle or any other problem."
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
