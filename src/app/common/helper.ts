export const FakeStoreApi = 'https://dummyjson.com/products';
// export const FakeStoreApi = 'https://fakestoreapi.com/products';
// export const tshirtApiUrl = 'https://dummyjson.com/products';
export interface IProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
