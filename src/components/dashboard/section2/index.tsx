"use client";

import { useRouter } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";
import { useGetProductsQuery } from "@/redux/apis/product.api";
import { Product } from "@/lib/types/product";
import CustomizedButton from "@/components/base/button";
import { useEffect, useState } from "react";
import GridLayout from "./grid";
import ProductCard from "./card";
import SectionHeader from "../sectionHeader";
import { useNotification } from "@/lib/contexts/notificationContext";

export default function FeaturedProductSection() {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useGetProductsQuery(page);
  const { showNotification } = useNotification();

  const handleClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  useEffect(() => {
    if (error) {
      showNotification("Can't fetch products.", "error");
    }
  }, [error, showNotification]);

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
      {isLoading && (
        <Box p={3} display="flex" alignItems="center" justifyContent="center">
          <CircularProgress size="24px" />
        </Box>
      )}
      {(data?.products.length || -1) < (data?.total || 0) && (
        <Box display="flex" justifyContent="center">
          <CustomizedButton
            sx={{
              minWidth: "265px",
            }}
            onClick={() => setPage((prev) => prev + 1)}
            disabled={isLoading}
            variant="outlined"
          >
            Load More Products
          </CustomizedButton>
        </Box>
      )}
    </>
  );
}
