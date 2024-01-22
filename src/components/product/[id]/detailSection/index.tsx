"use client";

import { CircularProgress, Container, Grid } from "@mui/material";
import OperationPanel from "./operationPanel";
import Gallery from "./gallery";
import { Product } from "@/lib/types/product";

export default function DetailSection({
  product,
  isLoading,
}: {
  product: Product | undefined;
  isLoading: boolean;
}) {
  return (
    <Container maxWidth="lg">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3.75}>
          <Grid item md={6} xs={12}>
            <Gallery images={product!.images} />
          </Grid>
          <Grid item md={6} xs={12} sx={{ pb: "75px" }}>
            <OperationPanel product={product!} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
