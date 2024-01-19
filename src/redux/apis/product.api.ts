import { Product } from "@/lib/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetProductResponse {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductResponse, number>({
      query: (page) => `products?limit=${10}&skip=${(page - 1) * 10}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newData) => {
        currentCache.products.push(...newData.products);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
