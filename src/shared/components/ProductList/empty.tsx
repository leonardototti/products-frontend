import { Button, Empty } from "antd";

interface IProductListEmptyProps {
  handleNewProduct: () => void;
}

export default function ProductListEmpty({
  handleNewProduct,
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
      <Button onClick={handleNewProduct}>Adicionar novo produto</Button>
    </Empty>
  );
}
