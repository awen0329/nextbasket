import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Product } from "@/lib/types/product";
import { formatPrice, getDiscountPrice } from "@/lib/utils";

export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  const { images, title, description, price, discountPercentage } = product;
  return (
    <Card>
      <CardActionArea sx={{ position: "relative" }} onClick={onClick}>
        <CardMedia
          component="img"
          height="300"
          image={images[0]}
          alt={title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent
          sx={{
            p: "25px 25px 35px 25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={700}>
            {description}
          </Typography>
          <Box display="flex" justifyContent="center" gap="5px">
            <Typography
              color="text.muted"
              variant="h5"
              letterSpacing={0.1}
              lineHeight="24px"
            >
              {formatPrice(price)}
            </Typography>
            <Typography
              color="secondary.main"
              variant="h5"
              letterSpacing={0.1}
              lineHeight="24px"
            >
              {formatPrice(getDiscountPrice(price, discountPercentage))}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
