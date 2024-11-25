import "./footer.styles.scss";
import { Typography } from "antd";

export default function Footer() {
  const { Link } = Typography;

  return (
    <footer>
      <p>Desenvolvido por Leonardo Totti</p>
      <p>
        <Link
          href="https://github.com/leonardototti/products-frontend"
          target="_blank"
        >
          Repositório
        </Link>{" "}
        |{" "}
        <Link href="https://www.linkedin.com/in/leonardototti/" target="_blank">
          Linkedin
        </Link>{" "}
        |{" "}
        <Link href="https://github.com/leonardototti" target="_blank">
          Github
        </Link>
      </p>
    </footer>
  );
}
