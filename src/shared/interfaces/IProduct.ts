import { IProductImage } from "./IProductImage";

export interface IProduct {
  id: string;
  name: string;
  is_active?: boolean;
  price: number;
  quantity: number;
  image: IProductImage | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateProductDTO
  extends Omit<IProduct, "id" | "createdAt" | "updatedAt" | "image"> {}
