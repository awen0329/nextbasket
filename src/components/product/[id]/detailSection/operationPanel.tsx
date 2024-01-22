import { Box, Divider, IconButton, Typography } from "@mui/material";
import CustomizedButton from "@/components/base/Button";
import Elipse from "@/components/base/elipse";
import Rating from "@/components/base/rating";
import HeartIcon from "@/assets/svgs/heart.svg";
import CartIcon from "@/assets/svgs/cart.svg";
import EyeIcon from "@/assets/svgs/eye.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Product } from "@/lib/types/product";
import { addItem as addWishlistItem } from "@/redux/slices/wishlist.slice";
import { addItem as addCartItem } from "@/redux/slices/cart.slice";
import { useNotification } from "@/lib/contexts/notificationContext";

export default function OperationPanel({ product }: { product: Product }) {
  const { showNotification } = useNotification();
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const dispatch = useAppDispatch();

  const isInCartAlready = cartItems.find((item) => item.id === product.id);
  const isInWishlistAlready = wishlistItems.find(
    (item) => item.id === product.id
  );

  const handleAddToWishList = () => {
    dispatch(addWishlistItem(product));
    showNotification("Successfully added to your cart.", "success");
  };

  const handleAddToCartList = () => {
    dispatch(addCartItem(product));
    showNotification("Successfully added to your favourite.", "success");
  };

  return (
    <Box
      p={{ md: "11px 24px 20px 24px" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <Box display="flex" flexDirection="column">
        <Typography
          variant="h4"
          lineHeight="30px"
          letterSpacing="0.2px"
          color="text.primary"
        >
          Floating Phone
        </Typography>
        <Box mt={1.5} mb={2.5} display="flex" gap="10px">
          <Rating />
          <Typography
            variant="h6"
            letterSpacing={0.2}
            lineHeight="24px"
            color="text.secondary"
          >
            10 Reviews
          </Typography>
        </Box>
        <Typography
          variant="h5"
          letterSpacing={0.1}
          lineHeight="32px"
          color="text.primary"
        >
          $1,139.33
        </Typography>
        <Box mt="5px" display="flex">
          <Typography
            variant="h6"
            letterSpacing={0.2}
            lineHeight="24px"
            color="text.secondary"
          >
            Availability :
          </Typography>
          <Typography
            variant="h6"
            letterSpacing={0.2}
            lineHeight="24px"
            color="primary"
          >
            In Stock
          </Typography>
        </Box>
      </Box>
      <Box>
        <Divider sx={{ bgcolor: "text.blur" }} />
        <Box display="flex" gap="10px" mt="30px" mb="67px">
          <Elipse radius={30} color="primary.main" />
          <Elipse radius={30} color="text.success" />
          <Elipse radius={30} color="text.alert" />
          <Elipse radius={30} color="text.primary" />
        </Box>
        <Box display="flex" gap="10px">
          <CustomizedButton
            variant="contained"
            sx={{ minWidth: "150px", p: "10px 20px" }}
            disableElevation
          >
            Select Options
          </CustomizedButton>
          <IconButton
            sx={{
              padding: "10px",
              height: 40,
              width: 40,
              border: "1px solid",
              borderColor: "background.gray3",
              color: "text.primary",
            }}
            disabled={!!isInWishlistAlready}
            onClick={handleAddToWishList}
          >
            <HeartIcon />
          </IconButton>
          <IconButton
            sx={{
              padding: "10px",
              height: 40,
              width: 40,
              border: "1px solid",
              borderColor: "background.gray3",
              color: "text.primary",
            }}
            onClick={handleAddToCartList}
            disabled={!!isInCartAlready}
          >
            <CartIcon />
          </IconButton>
          <IconButton
            sx={{
              padding: "10px",
              height: 40,
              width: 40,
              border: "1px solid",
              borderColor: "background.gray3",
              color: "text.primary",
            }}
          >
            <EyeIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
