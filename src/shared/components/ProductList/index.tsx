import { IProduct } from "@/shared/interfaces/IProduct";
import { IResponseGetAll } from "@/shared/interfaces/IResponse";
import { Card, List, Typography } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

import ProductListLoading from "./loading";
import ProductListError from "./error";
import ProductListEmpty from "./empty";

import getCardCover from "@/shared/helpers/getCardCover";

interface IProductListProps {
  products: IResponseGetAll<IProduct> | undefined;
  isLoading: boolean;
  isError: boolean;
  page: number;
  setPage: (page: number) => void;
  handleNewProduct: () => void;
  handleRemoveProduct: (id: string) => void;
}

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function ProductList({
  products,
  isLoading,
  isError,
  page,
  setPage,
  handleNewProduct,
  handleRemoveProduct,
}: IProductListProps) {
  if (isError) {
    return <ProductListError />;
  }

  if (isLoading) {
    return <ProductListLoading />;
  }

  if (!products?.result?.length) {
    return <ProductListEmpty handleNewProduct={handleNewProduct} />;
  }

  const { Meta } = Card;

  return (
    <List
      grid={{
        gutter: [20, 8],
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      dataSource={products?.result ?? []}
      renderItem={product => (
        <List.Item>
          <Card
            className="product-card"
            hoverable
            cover={getCardCover(product)}
            actions={[
              <div style={{ padding: "12px 0" }}>
                <EditTwoTone
                  key="edit"
                  style={{ fontSize: 18 }}
                  twoToneColor={"#032d8a"}
                />
              </div>,
              <div
                style={{ padding: "12px 0" }}
                onClick={() => handleRemoveProduct(product.id)}
              >
                <DeleteTwoTone
                  key="remove"
                  style={{ fontSize: 18 }}
                  twoToneColor={"#ff4d4f"}
                />
              </div>,
            ]}
          >
            <Meta
              title={product.name}
              description={product.quantity + " em estoque"}
              style={{ marginBottom: 4 }}
            />
            <Typography.Text type="success" strong style={{ fontSize: 16 }}>
              {formatter.format(product.price)}
            </Typography.Text>
          </Card>
        </List.Item>
      )}
      pagination={{
        pageSize: 12,
        total: products?.total ?? 0,
        showSizeChanger: false,
        hideOnSinglePage: true,
        onChange: page => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return setPage(page);
        },
        current: page,
      }}
    />
  );
}
