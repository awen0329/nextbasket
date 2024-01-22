import { Box, Typography } from "@mui/material";
import SearchIcon from "@/assets/svgs/search_b.svg";
import CartIcon from "@/assets/svgs/cart_b.svg";
import WishIcon from "@/assets/svgs/heart_b.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import useModal from "@/lib/hooks/useModal";
import CartModal from "@/components/modals/cartModal";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem as removeFromCart,
} from "@/redux/slices/cart.slice";
import { removeItem as removeFromWishlist } from "@/redux/slices/wishlist.slice";
import useCart from "@/lib/hooks/useCart";
import WishlistModal from "@/components/modals/wishlistModal";

export default function CartAndWishlist() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const dispatch = useAppDispatch();

  const { openModal, isOpen, closeModal } = useModal();
  const {
    openModal: openWishModal,
    isOpen: isWishModalOpen,
    closeModal: closeWishModal,
  } = useModal();
  const { count } = useCart();

  const increaseCartItem = (id: number) => dispatch(increaseQuantity(id));
  const decreaseCartItem = (id: number) => dispatch(decreaseQuantity(id));
  const removeCartItem = (id: number) => dispatch(removeFromCart(id));

  const removeWishItem = (id: number) => dispatch(removeFromWishlist(id));

  return (
    <Box display="flex" alignItems="center" gap="30px">
      <SearchIcon />
      <Box display="flex" alignItems="center" gap="5px" onClick={openModal}>
        <CartIcon />
        <Typography
          variant="body2"
          fontSize="12px"
          lineHeight="16px"
          letterSpacing={0.2}
          color="primary"
        >
          {count}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap="5px" onClick={openWishModal}>
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
      <CartModal
        open={isOpen}
        handleClose={closeModal}
        cartItems={cartItems}
        removeItem={removeCartItem}
        increaseItem={increaseCartItem}
        decreaseItem={decreaseCartItem}
      />
      <WishlistModal
        open={isWishModalOpen}
        handleClose={closeWishModal}
        items={wishlistItems}
        removeItem={removeWishItem}
      />
    </Box>
  );
}
