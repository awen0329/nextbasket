import BestSellerSection from "./bestSellerSection";
import DetailSection from "./detailSection";
import OthersSection from "./othersSection";
import PartnersSection from "./partnersSection";
import { useGetProductByIdQuery } from "@/redux/apis/product.api";

export default function ProductDetailPage({ id }: { id: number }) {
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  return (
    <>
      {data && <DetailSection product={data} />}
      <OthersSection />
      <BestSellerSection />
      <PartnersSection />
    </>
  );
}
