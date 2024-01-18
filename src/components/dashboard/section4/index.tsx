"use client";

import { fakePosts } from "@/lib/fake/featuredPosts";
import PostCard from "./card";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function FeaturedPostSection() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            py: { md: 14, xs: 10 },
            px: { md: "51px", xs: "24px" },
            mt: { md: 2, xs: 1.25 },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="10px"
            mb={10}
          >
            <Typography
              variant="h6"
              color="primary"
              lineHeight="24px"
              letterSpacing={0.2}
              textAlign="center"
            >
              Practice Advice
            </Typography>
            <Typography
              variant="h2"
              color="text.primary"
              lineHeight="50px"
              letterSpacing={0.2}
              textAlign="center"
              sx={{ width: { md: "auto", xs: "290px" } }}
            >
              Featured Posts
            </Typography>
          </Box>
          <Grid container display="flex" spacing={{ md: 1.25, xs: 3.75 }}>
            {fakePosts.map((post, index) => (
              <Grid item key={`fake_post-${index}`} xs={12} md={4}>
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
