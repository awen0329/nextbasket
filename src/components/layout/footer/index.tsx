"use client";

import {
  Box,
  Container,
  Divider,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { COPYRIGHT, FOOTER_ITEMS } from "@/lib/constants";
import FacebookIcon from "@/assets/svgs/facebook.svg";
import InstagramIcon from "@/assets/svgs/instagram.svg";
import TwitterIcon from "@/assets/svgs/twitter.svg";
import CustomizedButton from "@/components/base/button";
import Catalogue from "./catalogue";
import FooterGrid from "./grid";

export default function Footer() {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection="column"
            py={0}
            px={{ xs: "21px", lg: "51px" }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              gap="24px"
              flexDirection={{
                xs: "column",
                sm: "row",
              }}
              p={{
                xs: "40px 0",
                lg: "40px 0",
              }}
            >
              <Typography variant="h3" color="text.primary">
                Bandage
              </Typography>
              <Box display="flex" gap="20px">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </Box>
            </Box>
            <Divider
              variant="middle"
              sx={{
                backgroundColor: "background.gray1",
                height: "3px",
                width: "100%",
              }}
            />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <FooterGrid>
          {FOOTER_ITEMS.map(({ label, content }) => (
            <Catalogue key={label} label={label} content={content} />
          ))}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              gridColumn: {
                xs: "span 1",
                sm: "span 2",
              },
            }}
          >
            <Stack
              direction="column"
              alignItems="flex-start"
              sx={{ gap: "20px" }}
            >
              <Typography variant="h5">Get In Touch</Typography>
              <FormControl>
                <Stack>
                  <TextField
                    placeholder="Your Email"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        border: "1px solid",
                        borderRight: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        borderColor: "background.gray1",
                        "&.Mui-focused fieldset": {
                          borderColor: "primary.main",
                        },
                      },
                      "& .MuiInputBase-input": {
                        backgroundColor: "background.gray2",
                      },
                    }}
                  />
                  <CustomizedButton
                    variant="contained"
                    sx={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      p: {
                        xs: "15px 25px",
                        md: "15px 40px",
                      },
                    }}
                  >
                    Subscribe
                  </CustomizedButton>
                </Stack>
                <Typography
                  variant="body1"
                  fontSize="12px"
                  lineHeight="28px"
                  letterSpacing={0.2}
                  color="text.secondary"
                >
                  Lore imp sum dolor Amit
                </Typography>
              </FormControl>
            </Stack>
          </Box>
        </FooterGrid>
      </Container>
      <Container
        sx={{
          py: "25px",
          px: {
            xs: "42px",
            lg: "75px",
          },
          backgroundColor: "background.lightGray",
        }}
      >
        <Typography
          variant="h6"
          color="text.secondary"
          textAlign={{ xs: "center", md: "left" }}
        >
          {COPYRIGHT}
        </Typography>
      </Container>
    </footer>
  );
}
