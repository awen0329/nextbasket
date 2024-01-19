"use client";

import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";
import { useGetProductsQuery } from "@/redux/apis/product.api";
import { Product } from "@/lib/types/product";
import { useState } from "react";
import GridLayout from "./grid";
import ProductCard from "./card";
import SectionHeader from "../sectionHeader";

export default function FeaturedProductSection() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useGetProductsQuery(page);

  const handleClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <>
      <SectionHeader
        title="Bestseller products"
        subtitle="Featured Products"
        description="Problems trying to resolve the conflict between"
      />
      <GridLayout maxWidth="lg">
        {data?.products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
          />
        ))}
      </GridLayout>
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
