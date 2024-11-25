import { IResponseBase } from "./../interfaces/IResponse";
import { AxiosResponse } from "axios";

import api from "@/shared/api/base";
import {
  ICreateProductImageDTO,
  IProductImage,
} from "../interfaces/IProductImage";
import { IResponseGetAll } from "@/shared/interfaces/IResponse";

const path = "/product-images";

const create = async (
  data: ICreateProductImageDTO
): Promise<AxiosResponse<IResponseBase & IProductImage>> => {
  const formData = new FormData();

  formData.append("image", data.image as Blob);
  formData.append("product_id", data.product_id);

  return await api.post(path, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getAll = async (
  query = ""
): Promise<AxiosResponse<IResponseGetAll<IProductImage>>> =>
  await api.get(`${path}/${query}`);

const remove = async (id: string): Promise<AxiosResponse<void>> =>
  await api.delete(`${path}/${id}`);

export const productImagesService = { create, getAll, remove };
