type Product = {
  name: string;
  brand: string;
  category: string;
  count: number;
  price: number;
  desc: string;
  productId: string;
};

export interface ProductListProps {
  products: Product[];
}
