export function formatPrice(price: number) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function getDiscountPrice(
  originalPrice: number,
  discountPercentage: number
) {
  return ((100 - discountPercentage) / 100) * originalPrice;
}
