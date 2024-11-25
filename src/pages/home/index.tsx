import { App, Button } from "antd";
import "./home.styles.scss";
import { useProducts } from "@/shared/hooks/useProducts";
import ProductList from "@/shared/components/ProductList";
import { usePageParam } from "@/shared/hooks/usePageParam";
import Footer from "@/shared/components/Footer";
import CreateModal, { ICreateModalRef } from "@/shared/components/Modal/Create";
import { useCallback, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProduct } from "@/shared/data/products";
import EditModal, { IEditModalRef } from "@/shared/components/Modal/Edit";
import { IProduct } from "@/shared/interfaces/IProduct";

export default function HomePage() {
  const [page, setPage] = usePageParam(1);
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useProducts({ page });

  const { message, modal } = App.useApp();

  const createRef = useRef<ICreateModalRef>(null);
  const editRef = useRef<IEditModalRef>(null);

  const handleCreateProduct = useCallback(() => {
    createRef.current?.openModal();
  }, [createRef]);

  const handleEditProduct = useCallback(
    (product: IProduct) => {
      editRef.current?.openModal(product);
    },
    [editRef]
  );

  const { mutateAsync: removeProductFn, isPending } = useMutation({
    mutationKey: ["removeProduct"],
    mutationFn: removeProduct,
    onError: error => {
      process.env.NODE_ENV === "development" && console.error(error);
      message.error("Erro ao deletar produto");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });

      message.success("Produto deletado com sucesso!");
    },
  });

  const handleRemoveProduct = (id: string) => {
    modal.confirm({
      title: "Remover produto",
      content: "Tem certeza que deseja remover esse produto?",
      okText: "Sim",
      okType: "danger",
      cancelText: "Não",
      keyboard: !isPending,
      maskClosable: !isPending,
      closable: !isPending,
      onOk: () => removeProductFn(id),
    });
  };

  return (
    <>
      <div className="home-wrapper">
        <div className="banner"></div>
        <div className="container">
          <header>
            <h1>Produtos</h1>
            <Button type="primary" onClick={handleCreateProduct}>
              Novo produto
            </Button>
          </header>

          <div className="products-wrapper">
            <ProductList
              products={data}
              isLoading={isLoading}
              isError={isError}
              page={page}
              setPage={setPage}
              handleCreateProduct={handleCreateProduct}
              handleEditProduct={handleEditProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          </div>
        </div>
      </div>
      <Footer />

      <CreateModal ref={createRef} />
      <EditModal ref={editRef} />
    </>
  );
}
