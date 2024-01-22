"use client";

import { Container, Grid } from "@mui/material";
import OperationPanel from "./operationPanel";
import Gallery from "./gallery";
import { Product } from "@/lib/types/product";

export default function DetailSection({ product }: { product: Product }) {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3.75}>
        <Grid item md={6} xs={12}>
          <Gallery images={product.images} />
        </Grid>
        <Grid item md={6} xs={12} sx={{ pb: "75px" }}>
          <OperationPanel product={product} />
        </Grid>
      </Grid>
    </Container>
  );
}
