import data from "../Data";
import { ProductImage, ProductItemWrapper } from "../styling/styles";

const List = () => {
  return data.map((item) => (
    <ProductItemWrapper>
      <ProductImage src={item.image} />
      <h3>{item.gamename}</h3>
      <p>{item.gamerelease}</p>
      <p>{item.gameplatform}</p>
      <p>{item.gameid}</p>
    </ProductItemWrapper>
  ));
};

export default List;
