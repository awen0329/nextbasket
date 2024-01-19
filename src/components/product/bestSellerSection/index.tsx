"use client";

import { useRouter } from "next/navigation";
import { useGetProductsQuery } from "@/redux/apis/product.api";
import { Product } from "@/lib/types/product";
import GridLayout from "./grid";
import ProductCard from "@/components/dashboard/section2/card";

export default function BestSellerSection() {
  const router = useRouter();
  const { data, isLoading, error } = useGetProductsQuery(1);

  const handleClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <>
      <GridLayout maxWidth="lg">
        {data?.products.slice(0, 8).map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
          />
        ))}
      </GridLayout>
    </>
  );
}
