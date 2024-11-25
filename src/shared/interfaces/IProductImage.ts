import type { GetProp, UploadProps } from "antd";

type UploadFile = Parameters<
  GetProp<UploadProps, "onChange">
>[0]["file"]["originFileObj"];

export interface IProductImage {
  id: string;
  path: string;
  product_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface ICreateProductImageDTO {
  image: UploadFile;
  product_id: string;
}
