import Link from "@/components/base/link";
import { Box, Typography } from "@mui/material";
import UserIcon from "@/assets/svgs/user.svg";
import MenuIcon from "@/assets/svgs/menu.svg";
import CartAndWishlist from "./cartAndWishlist";
import { useState } from "react";

export default function Bottom() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Box
      display={{ md: "flex" }}
      mt={2}
      mb={1.5}
      height={{ xs: "auto", md: "58px" }}
      p="0 17px 0 38px"
      gap="120px"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Typography
            variant="h3"
            letterSpacing={0.1}
            lineHeight="32px"
            color="text.primary"
          >
            Bandage
          </Typography>
        </Link>
        <Box display={{ xs: "flex", md: "none" }} alignItems="center">
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </Box>
      </Box>
      <Box
        display={{ md: "flex", xs: isMenuOpen ? "flex" : "none" }}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        flexGrow={1}
        pl={{ xs: 0, md: 5 }}
        gap={{ xs: "30px", md: 0 }}
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          gap="21px"
        >
          <Link href="/">
            <Typography
              variant="h6"
              lineHeight="24px"
              letterSpacing={0.2}
              color="text.secondary"
            >
              Home
            </Typography>
          </Link>
          <Link isDropdown href="#">
            <Typography
              variant="h6"
              lineHeight="24px"
              letterSpacing={0.2}
              color="text.primary"
            >
              Shop
            </Typography>
          </Link>
          <Link href="#">
            <Typography
              variant="h6"
              lineHeight="24px"
              letterSpacing={0.2}
              color="text.secondary"
            >
              About
            </Typography>
          </Link>
          <Link href="#">
            <Typography
              variant="h6"
              lineHeight="24px"
              letterSpacing={0.2}
              color="text.secondary"
            >
              Blog
            </Typography>
          </Link>
          <Link href="#">
            <Typography
              variant="h6"
              lineHeight="24px"
              letterSpacing={0.2}
              color="text.secondary"
            >
              Contact
            </Typography>
          </Link>
          <Link href="#">
            <Typography
              variant="h6"
              lineHeight="24px"
              letterSpacing={0.2}
              color="text.secondary"
            >
              Pages
            </Typography>
          </Link>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
          gap="30px"
        >
          <Box display="flex" alignItems="center" gap="9px">
            <UserIcon />
            <Typography
              variant="h6"
              lineHeight="24px"
              letterSpacing={0.2}
              color="primary"
            >
              Login/Register
            </Typography>
          </Box>
          <CartAndWishlist />
        </Box>
      </Box>
    </Box>
  );
}
