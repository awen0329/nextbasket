"use client";

import ProductDetailPage from "@/components/product/[id]";

export default function ProductPage({
  params: { id },
}: {
  params: { id: number };
}) {
  return <ProductDetailPage id={id} />;
}
