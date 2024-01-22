import { CartProduct, Product } from "@/lib/types/product";
import { formatPrice, getDiscountPrice } from "@/lib/utils";
import { Box, IconButton, Typography } from "@mui/material";
import CustomizedButton from "../base/button";

export default function ListItem({
  product,
  items,
  isShowQuantityBar,
  increaseItem,
  decreaseItem,
  removeItem,
}: {
  product: Product;
  items: CartProduct[] | Product[];
  isShowQuantityBar?: boolean;
  increaseItem?: (id: number) => void;
  decreaseItem?: (id: number) => void;
  removeItem: (id: number) => void;
}) {
  const itemNumber = (
    items.find((item) => item.id === product.id) as CartProduct
  ).quantity;
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      gap="16px"
      p={3}
    >
      <Box
        component="img"
        src={product.thumbnail || product.images[0]}
        alt={product.title}
        width="100px"
        height="100px"
      />
      <Box display="flex" flexDirection="column">
        <Typography variant="h6">{product.title}</Typography>
        <Box display="flex" gap="25px">
          <Typography
            color="text.blur"
            variant="h5"
            letterSpacing={0.1}
            lineHeight="24px"
          >
            {formatPrice(product.price)}
          </Typography>
          <Typography
            color="secondary.main"
            variant="h5"
            letterSpacing={0.1}
            lineHeight="24px"
          >
            {formatPrice(
              getDiscountPrice(product.price, product.discountPercentage)
            )}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          {isShowQuantityBar && (
            <Box display="flex" gap="10px" alignItems="center">
              <IconButton onClick={() => decreaseItem?.(product.id)}>
                -
              </IconButton>
              <span>{itemNumber}</span>
              <IconButton onClick={() => increaseItem?.(product.id)}>
                +
              </IconButton>
            </Box>
          )}
          <CustomizedButton onClick={() => removeItem(product.id)}>
            Remove
          </CustomizedButton>
        </Box>
      </Box>
    </Box>
  );
}
