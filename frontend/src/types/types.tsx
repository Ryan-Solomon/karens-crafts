export type ProductData = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  product?: string;
  qty?: string | number;
};

export type Action = {
  type: string;
  payload: unknown;
};
