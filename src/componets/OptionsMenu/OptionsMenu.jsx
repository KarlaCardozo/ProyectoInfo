import React, { useState, useEffect } from "react";
import {
  ContainerMenus,
  CardsOptions,
  ContainerCards,
  CardsLabel,
} from "./OptionsMenu.style";
import { Link } from "react-router-dom";
import Desayunos from "../../assets/Desayunos";
import Comidas from "../../assets/Cenas";
import Cenas from "../../assets/Comidas";
import Bebidas from "../../assets/Bebidas";
import Postres from "../../assets/Postres";
import NavBar from "../NavBar/Navbar";
import axios from "axios";

const images = [
  {
    id: 1,
    title: "Desayunos",
    imageUrl: <Desayunos width="100%" height="100%" />,
  },
  {
    id: 2,
    title: "Comidas",
    imageUrl: <Comidas width="100%" height="100%" />,
  },
  {
    id: 3,
    title: "Cenas",
    imageUrl: <Cenas width="100%" height="100%" />,
  },
  {
    id: 4,
    title: "Bebidas",
    imageUrl: <Bebidas width="100%" height="100%" />,
  },
  {
    id: 5,
    title: "Postres",
    imageUrl: <Postres width="100%" height="100%" />,
  },
];

const getCategoryImage = (category) => {
  const image = images.find((img) => img.title === category);
  return image ? image.imageUrl : null;
};

const OptionsMenu = () => {
  const [tipoMenu, setTipoMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/tipo_menu");
      setTipoMenu(result.data);
    };

    fetchData();
  }, []);
  return (
    <ContainerMenus>
      <NavBar />
      <ContainerCards>
        {tipoMenu.map((menu, index) => (
          <Link to={`/${menu.nombre_tipo_menu}`} key={index}>
            <CardsOptions className="card" key={index}>
              {getCategoryImage(menu.nombre_tipo_menu)}
              <CardsLabel>{menu.nombre_tipo_menu}</CardsLabel>
            </CardsOptions>
          </Link>
        ))}
      </ContainerCards>
    </ContainerMenus>
  );
};

export default OptionsMenu;
