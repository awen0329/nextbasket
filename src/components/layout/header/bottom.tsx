import Link from "@/components/base/link";
import { Box, Typography } from "@mui/material";
import UserIcon from "@/assets/svgs/user.svg";
import CartAndWishlist from "./cartAndWishlist";

export default function Bottom() {
  return (
    <Box
      display={{ md: "flex" }}
      mt={2}
      mb={1.5}
      height="58px"
      p="0 17px 0 38px"
      gap="120px"
    >
      <Box display="flex" alignItems="center">
        <Typography variant="h3" letterSpacing={0.1} lineHeight="32px">
          Bandage
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" flexGrow={1} pl={5}>
        <Box display="flex" gap="21px">
          <Link href="#">
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
        <Box display="flex" gap="30px">
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
