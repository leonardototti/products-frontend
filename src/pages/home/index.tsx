import { Button } from "antd";
import "./home.styles.scss";
import { useProducts } from "@/shared/hooks/useProducts";
import ProductList from "@/shared/components/ProductList";
import { usePageParam } from "@/shared/hooks/usePageParam";
import Footer from "@/shared/components/Footer";

export default function HomePage() {
  const [page, setPage] = usePageParam(1);
  const { data, isLoading, isError } = useProducts({ page });

  return (
    <>
      <div className="home-wrapper">
        <div className="banner"></div>
        <div className="container">
          <header>
            <h1>Produtos</h1>
            <Button type="primary">Novo produto</Button>
          </header>

          <div className="products-wrapper">
            <ProductList
              products={data}
              isLoading={isLoading}
              isError={isError}
              page={page}
              setPage={setPage}
              handleNewProduct={() => {}}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
