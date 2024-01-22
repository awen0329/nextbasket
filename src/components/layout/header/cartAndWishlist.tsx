import { Box, Typography } from "@mui/material";
import SearchIcon from "@/assets/svgs/search_b.svg";
import CartIcon from "@/assets/svgs/cart_b.svg";
import WishIcon from "@/assets/svgs/heart_b.svg";
import { useAppSelector } from "@/redux/hooks";

export default function CartAndWishlist() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
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
          {cartItems.length}
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
          {wishlistItems.length}
        </Typography>
      </Box>
    </Box>
  );
}
