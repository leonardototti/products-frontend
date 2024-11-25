import { ICreateProductDTO } from "../interfaces/IProduct";
import type { GetProp, UploadProps } from "antd";
import { productsService } from "../services/products.service";
import { productImagesService } from "../services/productImages.service";

type UploadFile = Parameters<
  GetProp<UploadProps, "onChange">
>[0]["file"]["originFileObj"];

export async function createProduct({
  image,
  ...productData
}: ICreateProductDTO & { image?: UploadFile }) {
  const { data: product } = await productsService.create(productData);

  if (image) {
    await productImagesService.create({
      product_id: product.id,
      image,
    });
  }

  return product;
}

export async function removeProduct(id: string) {
  await productsService.remove(id);
}
