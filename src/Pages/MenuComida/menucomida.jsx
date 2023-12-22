// MenuComida.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Contador from "../../componets/Counter/counter";
import NavBar from "../../componets/NavBar/Navbar";
import {
  Menu_Container,
  ContainerCard,
  ContainerMenu,
  Container_Nombre_Precio,
  Label_Nombre,
  Label_Precio,
  Label_Desc,
  ButtonAdd,
  ObtText,
  Label_Title,
} from "./menucomida.style";
import EnsaladaCesar from "../../assets/menus/EnsaladaCesar";
import PastaAlfredo from "../../assets/menus/PastaAlfredo";

const images = [
  {
    id: 1,
    title: "Ensalada César",
    imageUrl: <EnsaladaCesar width="100%" height="100%" />,
  },
  {
    id: 1,
    title: "Pasta Alfredo",
    imageUrl: <PastaAlfredo width="100%" height="100%" />,
  },
];

const getCategoryImage = (category) => {
  const image = images.find((img) => img.title === category);
  return image ? image.imageUrl : null;
};

const MenuComida = ({ addToCart }) => {
  const [platillo, setPlatillo] = useState([]);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
  const [observaciones, setObservaciones] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:3000/platillos");
        const filteredPlatillos = result.data.filter(
          (item) => item.id_tipo_menu === 2
        );
        setPlatillo(filteredPlatillos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Menu_Container>
      <NavBar />
      <Label_Title>Comidas</Label_Title>
      {platillo.map((item) => (
        <ContainerCard key={item.id}>
          <ContainerMenu>
            {getCategoryImage(item.nombre_platillo)}
            <Container_Nombre_Precio>
              <Label_Nombre>{item.nombre_platillo}</Label_Nombre>
              <Label_Precio>{item.precio}</Label_Precio>
            </Container_Nombre_Precio>
            <Label_Desc>{item.descripcion_platillo}</Label_Desc>
          </ContainerMenu>
          <Contador
            onCountChange={(cantidad) => {
              setCantidadSeleccionada(cantidad);
            }}
          />
          <ObtText
            type="text"
            placeholder="Observaciones"
            onChange={(e) => {
              // Capturar las observaciones y almacenarlas en el estado
              setObservaciones(e.target.value);
            }}
          />
          <ButtonAdd
            onClick={() => addToCart(item, cantidadSeleccionada, observaciones)}
          >
            Agregar
          </ButtonAdd>
        </ContainerCard>
      ))}
    </Menu_Container>
  );
};

export default MenuComida;
