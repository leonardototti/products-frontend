import { AxiosResponse } from "axios";

import api from "@/shared/api/base";
import { ICreateProductDTO, IProduct } from "@/shared/interfaces/IProduct";
import { IResponseBase, IResponseGetAll } from "@/shared/interfaces/IResponse";

const path = "/products";

const create = async (
  data: ICreateProductDTO
): Promise<AxiosResponse<IResponseBase & IProduct>> =>
  await api.post(path, data);

const getAll = async (
  query = ""
): Promise<AxiosResponse<IResponseGetAll<IProduct>>> =>
  await api.get(`${path}/${query}`);

const getById = async (
  id: string
): Promise<AxiosResponse<IResponseBase & IProduct>> =>
  await api.get(`${path}/${id}`);

const update = async (
  id: string,
  data: Partial<ICreateProductDTO>
): Promise<AxiosResponse<IResponseBase & IProduct>> =>
  await api.put(`${path}/${id}`, data);

const remove = async (id: string): Promise<AxiosResponse<void>> =>
  await api.delete(`${path}/${id}`);

export const productsService = { create, getAll, getById, update, remove };
