"use client";

import { Box, Container, Typography } from "@mui/material";
import UserImage from "@/assets/images/users/user.png";
import TestimonialImage1 from "@/assets/images/testimonials/testimonials-1.png";
import TestimonialImage2 from "@/assets/images/testimonials/testimonials-2.png";
import TestimonialImage3 from "@/assets/images/testimonials/testimonials-3.png";
import TestimonialImage4 from "@/assets/images/testimonials/testimonials-4.png";
import TestimonialImage5 from "@/assets/images/testimonials/testimonials-5.png";
import TestimonialImage6 from "@/assets/images/testimonials/testimonials-6.png";
import TestimonialImage7 from "@/assets/images/testimonials/testimonials-7.png";
import TestimonialImage8 from "@/assets/images/testimonials/testimonials-8.png";
import TestimonialImage9 from "@/assets/images/testimonials/testimonials-9.png";
import Image from "next/image";
import Rating from "@/components/base/rating";

const imageSource = [
  TestimonialImage1.src,
  TestimonialImage2.src,
  TestimonialImage3.src,
  TestimonialImage4.src,
  TestimonialImage5.src,
  TestimonialImage6.src,
  TestimonialImage7.src,
  TestimonialImage8.src,
  TestimonialImage9.src,
];

export default function TestimonialSection() {
  return (
    <Container maxWidth="lg" sx={{ p: { xs: 3, lg: 4.5 } }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        p={{ xs: 0, lg: 6 }}
      >
        <Box display="flex" flexDirection="column" gap="28px">
          <Typography
            variant="h3"
            sx={{ paddingTop: "18px", textAlign: "center" }}
          >
            What they say about us
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
            p={{ xs: 6, md: "30px 35px" }}
          >
            <Box
              sx={{
                height: "90px",
                width: "90px",
                border: "1.8px solid",
                borderColor: "text.blur",
                borderRadius: "90px",
                background: `url(${UserImage.src}) lightgray 50% / cover no-repeat`,
              }}
            />
            <Rating />
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "text.secondary" }}
            >
              {`Slate helps you see how many more days you need to work to reach your financial goal.`}
            </Typography>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: "primary.main" }}
              >{`Regina Miles`}</Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 700 }}
              >{`Designer`}</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "17px 16px",
          }}
        >
          {imageSource.map((imgPath) => (
            <Box
              key={`testimonial-${imgPath}`}
              position="relative"
              width="100%"
              height={{ xs: "85px", md: "143px" }}
              sx={{
                aspectRatio: "1/1",
              }}
            >
              <Image alt={`testimonial-image`} src={imgPath} fill />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
