import { Box, Typography } from "@mui/material";
import SearchIcon from "@/assets/svgs/search_b.svg";
import CartIcon from "@/assets/svgs/cart_b.svg";
import WishIcon from "@/assets/svgs/heart_b.svg";

export default function CartAndWishlist() {
  return (
    <Box display="flex" alignItems="center" gap="30px">
      <SearchIcon />
      <Box display="flex" alignItems="center" gap="5px">
        <CartIcon />
        <Typography
          variant="body2"
          fontSize="12px"
          lineHeight="16px"
          letterSpacing={0.2}
          color="primary"
        >
          {1}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap="5px">
        <WishIcon />
        <Typography
          variant="body2"
          fontSize="12px"
          lineHeight="16px"
          letterSpacing={0.2}
          color="primary"
        >
          {1}
        </Typography>
      </Box>
    </Box>
  );
}
