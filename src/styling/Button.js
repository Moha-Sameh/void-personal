import React from "react";
import styled from "styled-components";

const Button = ({ child }) => {
  return <Button>{child}</Button>;
};

const StyledButton = styled.button`
  padding: 0 0.5;
  font-size: 1rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: ${(props) => props.theme.colors.secondery};
  outline: none;
`;

export default StyledButton;
