"use client";

import { Box, Typography } from "@mui/material";
import Link from "@/components/base/link";
import PhoneIcon from "@/assets/svgs/phone.svg";
import MailIcon from "@/assets/svgs/mail.svg";
import InstagramIcon from "@/assets/svgs/xinstagram.svg";
import YoutubeIcon from "@/assets/svgs/youtube.svg";
import FacebookIcon from "@/assets/svgs/xfacebook.svg";
import TwitterIcon from "@/assets/svgs/xtwitter.svg";

export default function Top() {
  return (
    <nav>
      <Box
        display={{ md: "flex", xs: "none" }}
        justifyContent="space-between"
        bgcolor="secondary.main"
        p="9px 24px 3px 24px"
        height="58px"
      >
        <Box display="flex" gap="30px">
          <Link
            href="tel:(225) 555-0118"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.light",
              gap: "5px",
            }}
          >
            <PhoneIcon />
            <Typography
              variant="h6"
              lineHeight="24px"
              letterSpacing={0.2}
              color="text.light"
            >
              (225) 555-0118
            </Typography>
          </Link>
          <Link
            href="mailto:michelle.rivera@example.com"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.light",
              gap: "5px",
            }}
          >
            <MailIcon />
            <Typography
              variant="h6"
              lineHeight="24px"
              letterSpacing={0.2}
              color="text.light"
            >
              michelle.rivera@example.com
            </Typography>
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            lineHeight="24px"
            letterSpacing={0.2}
            color="text.light"
          >
            Follow Us and get a chance to win 80% off
          </Typography>
        </Box>
        <Box display="flex" gap="10px" alignItems="center">
          <Typography
            variant="h6"
            lineHeight="24px"
            letterSpacing={0.2}
            color="text.light"
          >
            Follow Us :
          </Typography>
          <Box display="flex" gap="16px" alignItems="center">
            <InstagramIcon />
            <YoutubeIcon />
            <FacebookIcon />
            <TwitterIcon />
          </Box>
        </Box>
      </Box>
    </nav>
  );
}
