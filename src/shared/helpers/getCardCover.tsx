import { URL_FILES } from "@/shared/constants/apiUrls";
import { IProduct } from "@/shared/interfaces/IProduct";

const getCardCover = (product: IProduct) => {
  let src = product.image?.path
    ? URL_FILES + product.image.path
    : "/no-image.png";

  return <img className="product-image" src={src} alt="" />;
};

export default getCardCover;
