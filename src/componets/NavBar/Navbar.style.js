import styled from "styled-components";
import { Cart } from "@styled-icons/boxicons-solid/Cart";

export const Navbar_Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(75, 165, 134);
  padding: 10px 0 10px 0;
  width: 100%;
  height: 25px;
  font-weight: 300;
  position: static;
`;

export const LabelTitle = styled.label`
  margin-left: 10px;
`;

export const Carrito = styled(Cart)`
  color: #d0fdd7;
  width: 30px;
  cursor: pointer;
  margin-right: 10px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
