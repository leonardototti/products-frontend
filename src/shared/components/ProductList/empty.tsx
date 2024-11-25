import { Button, Empty } from "antd";

interface IProductListEmptyProps {
  handleCreateProduct: () => void;
}

export default function ProductListEmpty({
  handleCreateProduct,
}: IProductListEmptyProps) {
  return (
    <Empty
      style={{
        backgroundColor: "white",
        padding: "48px 32px",
        borderRadius: 8,
      }}
      imageStyle={{ height: 110 }}
      description="Nenhum produto encontrado."
    >
      <Button onClick={handleCreateProduct}>Adicionar novo produto</Button>
    </Empty>
  );
}
