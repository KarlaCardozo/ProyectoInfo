import React from "react";
import { Link } from "react-router-dom";
import { Navbar_Container, Carrito, LabelTitle,ContainerLogo } from "./Navbar.style";
import Logo from "../../assets/Logo";

const NavBar = () => {
  return (
    <Navbar_Container>
      <Link to="/">
        <ContainerLogo>
          <Logo width="45px" height="45px" />
          <LabelTitle> Soft-Food Demo</LabelTitle>
        </ContainerLogo>
      </Link>
      <Link to="/Carrito">
        <Carrito />
      </Link>
    </Navbar_Container>
  );
};

export default NavBar;
