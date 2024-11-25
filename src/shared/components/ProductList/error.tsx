import { useQueryClient } from "@tanstack/react-query";
import { Button, Result } from "antd";

export default function ProductListError() {
  const queryClient = useQueryClient();

  return (
    <Result
      style={{ backgroundColor: "white", borderRadius: 8 }}
      status="error"
      title="Erro ao buscar produtos"
      subTitle="Ocorreu um erro ao buscar os produtos, aguarde um momento e tente novamente."
      extra={[
        <Button
          key="retry"
          onClick={() => {
            queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });
          }}
        >
          Tentar novamente
        </Button>,
      ]}
    />
  );
}
