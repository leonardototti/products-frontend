export interface IGetAllFilters {
  page: number;
  per_page?: number;
  orderBy?: string;
  orderValue?: "ASC" | "DESC";
}
