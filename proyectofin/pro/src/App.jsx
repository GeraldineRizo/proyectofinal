import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import VentasBoletos from "./paginas/VentasBoletos";
import Devoluciones from "./paginas/Devoluciones";

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <h2>Vente Conmigo Agencia de Paquetes Turisticos C.A</h2>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="VentasBoletos" element={<VentasBoletos />} />
          <Route path="Devoluciones" element={<Devoluciones />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Example;
