import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { productsService } from "@/shared/services/products.service";
import { IGetAllFilters } from "@/shared/interfaces/IGetAllFilters";
import formatQueryParams from "@/shared/helpers/formatQueryParams";

export function useProducts({ page = 1, per_page = 12 }: IGetAllFilters) {
  const query = useQuery({
    queryKey: ["getAllProducts", page, per_page],
    queryFn: () =>
      productsService.getAll(formatQueryParams({ page, per_page })),
    placeholderData: keepPreviousData,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
