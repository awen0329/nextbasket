"use client";

import BreadCrumbs from "@/components/base/breadCrumbs";
import BestSellerSection from "./bestSellerSection";
import DetailSection from "./detailSection";
import OthersSection from "./othersSection";
import PartnersSection from "./partnersSection";
import { useGetProductByIdQuery } from "@/redux/apis/product.api";
import { useNotification } from "@/lib/contexts/notificationContext";
import { useEffect } from "react";

export default function ProductDetailPage({ id }: { id: number }) {
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  const { showNotification } = useNotification();

  useEffect(() => {
    if (error) {
      showNotification("Can't fetch this product information.", "error");
    }
  }, [error, showNotification]);

  return (
    <>
      <BreadCrumbs paths={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <DetailSection product={data} isLoading={isLoading} />
      <OthersSection />
      <BestSellerSection />
      <PartnersSection />
    </>
  );
}
