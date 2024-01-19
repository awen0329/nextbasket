"use client";

import { Box, Button } from "@mui/material";
import { useGetProductsQuery } from "@/redux/apis/product.api";
import SectionHeader from "../sectionHeader";
import LayoutGrid from "./grid";
import { useState } from "react";
import ProductCard from "./card";
import { Product } from "@/lib/types/product";

export default function FeaturedProductSection() {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useGetProductsQuery(page);

  return (
    <>
      <SectionHeader
        title="Bestseller products"
        subtitle="Featured Products"
        description="Problems trying to resolve the conflict between"
      />
      <LayoutGrid maxWidth="lg">
        {data?.products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </LayoutGrid>
      {(data?.products.length || -1) < (data?.total || 0) && (
        <Box display="flex" justifyContent="center">
          <Button
            sx={{
              p: "15px 40px",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: 0.2,
              lineHeight: "22px",
              minWidth: "265px",
            }}
            onClick={() => setPage((prev) => prev + 1)}
            disabled={isLoading}
            variant="outlined"
            size="medium"
          >
            Load More Products
          </Button>
        </Box>
      )}
    </>
  );
}
