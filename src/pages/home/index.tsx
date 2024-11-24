import { Button } from "antd";
import "./home.styles.scss";

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <div className="banner"></div>
      <div className="container">
        <header>
          <h1>Produtos</h1>
          <Button type="primary">Novo produto</Button>
        </header>
      </div>
    </div>
  );
}
