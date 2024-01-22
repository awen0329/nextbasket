import { CartProduct, Product } from "@/lib/types/product";
import { Box, Dialog, Modal, Typography } from "@mui/material";
import ListItem from "./listItem";
import useCart from "@/lib/hooks/useCart";
import { formatPrice } from "@/lib/utils";

export default function CartModal({
  open,
  handleClose,
  cartItems,
  increaseItem,
  decreaseItem,
  removeItem,
}: {
  open: boolean;
  handleClose: () => void;
  cartItems: CartProduct[];
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
}) {
  const { totalDiscountPrice } = useCart();
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      {cartItems.length === 0 ? (
        <Box p={5}>
          <Typography variant="h6">No Item</Typography>
        </Box>
      ) : (
        <Box>
          {cartItems.map((item) => (
            <ListItem
              key={item.id}
              product={item}
              isShowQuantityBar
              items={cartItems}
              decreaseItem={decreaseItem}
              removeItem={removeItem}
              increaseItem={increaseItem}
            />
          ))}
          <Box p={3}>
            <Typography variant="h6">
              Total: {formatPrice(totalDiscountPrice)}
            </Typography>
          </Box>
        </Box>
      )}
    </Dialog>
  );
}
