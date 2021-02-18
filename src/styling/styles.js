import List from "../component/List";
import styled from "styled-components";

export const Lamaana = styled.div`
  border-width: 20px;
  border-bottom: azure;
  margin: 6rem;
  text-align: center;

  h3 {
    color: rebeccapurple;
    font-size: 3rem;
  }
  p {
    font-size: 1.8rem;
  }
`;

export const ProductItemWrapper = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
`;

export const ProductImage = styled.img`
  border-radius: 5rem;
  width: 400px;
  height: 250px;
`;
