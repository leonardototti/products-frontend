export interface IProductImage {
  id: string;
  path: string;
  product_id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateProductImageDTO {
  image: File;
  product_id: string;
}
