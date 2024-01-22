"use client";

import { useAppSelector } from "@/redux/hooks";
import { useMemo } from "react";
import { CartProduct } from "../types/product";
import { getDiscountPrice } from "../utils";

export default function useCart(): {
  count: number;
  totalPrice: number;
  totalDiscountPrice: number;
} {
  const cartItems = useAppSelector((state) => state.cart.items);

  const cartInfo = useMemo(() => {
    return cartItems.reduce(
      ({ count, totalPrice, totalDiscountPrice }, cartItem: CartProduct) => {
        const tp = totalPrice + cartItem.price;
        const tdp =
          totalDiscountPrice +
          getDiscountPrice(cartItem.price, cartItem.discountPercentage);
        const ct = count + cartItem.quantity;
        return { count: ct, totalPrice: tp, totalDiscountPrice: tdp };
      },
      { count: 0, totalPrice: 0, totalDiscountPrice: 0 }
    );
  }, [cartItems]);

  return cartInfo;
}
