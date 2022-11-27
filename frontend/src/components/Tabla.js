import React, { useState } from "react";
import s from "../stylesheets/tabla.module.css";
import {
  Table,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  Input,
  Label,
  ModalFooter,
} from "reactstrap";

export const Tabla = ({ productos, onClose, editar,crear }) => {
  const [abierto, setAbierto] = useState(false);
  const [abierto2, setAbierto2] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [img, setImg] = useState("");
  const [_id, setId] = useState("");
  const [cantidad,setCantidad]=useState("");
  function abrirModal(dato) {
    console.log(dato);
    setNombre(dato.nombre);
    setDescripcion(dato.descripcion);
    setPrecio(dato.precio);
    setId(dato._id);
    setImg(dato.img);
    setCantidad(dato.cantidad)
    setAbierto((actual) => {
      if (actual === true) {
        return false;
      } else {
        return true;
      }
      
    });
  }
  function cerrar(){
    setAbierto((actual) => {
      if (actual === true) {
        return false;
      } else {
        return true;
      }
      
    });
  }
  function abrir(){

    setAbierto2((actual) => {
      setNombre("");
    setDescripcion("");
    setPrecio("");
    setId("");
    setImg("");
    setCantidad("")
      if (actual === true) {
        return false;
      } else {
        return true;
      }
    });
  }
  return (
    <>
      <div className={`container ${s.tabla}`}>
        <br />
        <h1>Tabla de productos</h1>
        <br />
        <Button onClick={abrir} color="success">Insertar un nuevo producto</Button>
        <Modal isOpen={abierto2}>
          <ModalHeader>Crear Producto</ModalHeader>
          <ModalBody>
          <FormGroup>
              <Label for="imagen">img</Label>
              <Input
                type="text"
                id="imagen"
                value={img}
                onChange={(e)=>setImg(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="nombre">Nombre del producto</Label>
              <Input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="precio">Precio</Label>
              <Input
                type="text"
                id="Precio"
                value={`${precio}`}
                onChange={(e) => setPrecio(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="cantidad">Cantidad</Label>
              <Input
                type="text"
                id="cantidad"
                value={`${cantidad}`}
                onChange={(e) => setCantidad(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="descripcion">Descripción</Label>
              <br></br>
              <textarea
                rows="3"
                cols="50"
                type="text"
                id="descripcion"
                onChange={(e) => setDescripcion(e.target.value)}
                value={`${descripcion}`}
              ></textarea>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                crear({
                  img:img,
                  _id: productos.length+1,
                  nombre: nombre,
                  precio: precio,
                  descripcion: descripcion,
                  cantidad:cantidad
                });
                abrir();
              }}
              color="success"
            >Crear
            </Button>
            <Button onClick={abrir} color="success">
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>

        <br />
        <Table>
          <thead className="text-light">
            <tr>
              <th>img</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio </th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className="text-light">
            {productos.map((dato) => (
              <tr key={dato._id}>
                <td>
                  <img
                    className={s.imagens}
                    src={dato.img.url}
                    alt="Air Force One"
                  />
                </td>
                <td>{dato.nombre}</td>
                <td>{dato.cantidad}</td>
                <td>{dato.precio} $</td>
                <td>
                  <Button onClick={() => abrirModal(dato)} color="success">
                    Editar
                  </Button>
                  <Modal isOpen={abierto}>
                    <ModalHeader>MODIFICAR PRODUCTO</ModalHeader>
                    <ModalBody>
                      <FormGroup>
                        <Label for="nombre">Nombre del producto</Label>
                        <Input
                          type="text"
                          id="nombre"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="precio">Precio</Label>
                        <Input
                          type="text"
                          id="Precio"
                          value={`${precio}`}
                          onChange={(e) => setPrecio(e.target.value)}
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="cantidad">Cantidad</Label>
                        <Input
                          type="text"
                          id="cantidad"
                          value={`${cantidad}`}
                          onChange={(e) => setCantidad(e.target.value)}
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="descripcion">Descripción</Label>
                        <br></br>
                        <textarea
                          
                          rows="3"
                          cols="50"
                          type="text"
                          id="descripcion"
                          onChange={(e) => setDescripcion(e.target.value)}
                          value={`${descripcion}`}
                        ></textarea>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        onClick={() => {
                          editar({
                            _id: _id,
                            nombre: nombre,
                            precio: precio,
                            cantidad: cantidad,
                            descripcion: descripcion,
                            img: img,
                          });
                          cerrar();
                        }}
                        color="success"
                      >
                        Guardar
                      </Button>
                      <Button onClick={() => abrirModal(dato)} color="success">
                        Cerrar
                      </Button>
                    </ModalFooter>
                  </Modal>{" "}
                  <Button onClick={() => onClose(dato._id)} color="danger">
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
