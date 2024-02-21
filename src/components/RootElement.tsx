import { Product } from "../ts/interface/global_interfaces";
import useProductData from "./useProductData";

export default function RootElement() {
  const [products] = useProductData();

  return (
    <div className="container">
      {" "}
      {(products as Product[]).map((product) => (
        <div className="card" key={product.id}>
          <img className="cardImg" src={product.image} />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
