import { IProductImage } from "./IProductImage";

export interface IProduct {
  id: string;
  name: string;
  is_active?: boolean;
  price: number;
  quantity: number;
  image: IProductImage | null;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateProductDTO
  extends Omit<IProduct, "id" | "created_at" | "updated_at" | "image"> {}
