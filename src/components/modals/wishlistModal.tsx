import { CartProduct, Product } from "@/lib/types/product";
import { Box, Dialog, Modal, Typography } from "@mui/material";
import ListItem from "./listItem";
import useCart from "@/lib/hooks/useCart";
import { formatPrice } from "@/lib/utils";

export default function WishlistModal({
  open,
  handleClose,
  items,
  removeItem,
}: {
  open: boolean;
  handleClose: () => void;
  items: Product[];
  removeItem: (id: number) => void;
}) {
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      {items.length === 0 ? (
        <Box p={5}>
          <Typography variant="h6">No Item</Typography>
        </Box>
      ) : (
        <Box>
          {items.map((item) => (
            <ListItem
              key={item.id}
              product={item}
              items={items}
              removeItem={removeItem}
            />
          ))}
        </Box>
      )}
    </Dialog>
  );
}
