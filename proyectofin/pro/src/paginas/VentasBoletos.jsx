import { Form, FormGroup, Label, FormText, Input, Container } from "reactstrap";
import "../estilos/espacio.css";
import React, { useState } from "react";
import jsPDF from "jspdf";

function VentasBoletos() {

const [tipoCobro, setTipoCobro] = useState("");
 const [RefPago, setRefPago] = useState("");
 const [AutoRefPago, setAutoRefPago] = useState("");
const [seleccion, setSeleccion] = useState('ref');

 const handleSeleccionChange = (event) => {
    setSeleccion(event.target.value);
    if (event.target.value === 'autoRef' && tipoCobro === 'Efectivo') {
      // Generar un código aleatorio cuando se selecciona "Referencia de pago autoRef"
      setAutoRefPago(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    }
 };

 const handleTipoCobroChange = (e) => {
    setTipoCobro(e.target.value);
    if (seleccion === 'autoRef' && e.target.value === 'Efectivo') {
      setAutoRefPago(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    }
 };


  // Estado para controlar si el usuario es menor de edad
  const [esMenor, setEsMenor] = useState(false);

  // Función para manejar el cambio en el campo "Menoredad"
  const handleMenorChange = (e) => {
    // Asumimos que "Si" es la respuesta para que el usuario sea menor de edad
    setEsMenor(e.target.value === "Si");
  };

  // Validar que la cédula tenga 8 dígitos
  const [cedula, setCedula] = useState("");
  const [isValidCedula, setIsValidCedula] = useState(true);

  const handleCedulaChange = (e) => {
    setCedula(e.target.value);
    setIsValidCedula(validateCedula(e.target.value));
  };

  const validateCedula = (cedula) => {
    return cedula.length >= 7 && cedula.length <= 8;
  };


  //Numero de puesto en transporte
  const [puestoT, setpuestoT] = useState(0);

  const generateRandompuestoT = () => {
    // Generate a random number between 1 and 30
    const randomNumber = Math.floor(Math.random() * 30) + 1;
    setpuestoT(randomNumber);
  };

  const [asientosVendidos, setAsientosVendidos] = useState(0);
  const maxAsientos = 10;

  const handleSaleAttempt = () => {
  if (asientosVendidos < maxAsientos) {
    setAsientosVendidos(asientosVendidos + 1);
    alert('Venta realizada con éxito.');
  } else {+
    alert('Lo sentimos, el paquete turístico está agotado para esta fecha.');
  }
};

  const [fechaInicio, setfechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [fechaVenta, setFechaVenta] = useState("");
  const [tipoVenta, setTipoVenta] = useState("");
  const [montopt, setmontopt] = useState("");
  const [monto2pt, setmonto2pt] = useState("");
  const [codPais, setcodPais] = useState("");
  const [idPt, setidPt] = useState("");
  const [tipoPersona, settipoPersona] = useState("");
  const [tipoTransporte, settipoTransporte] = useState("");



  // Asegúrate de tener funciones de manejo de cambios para cada campo

  const handlefechaInicioChange = (e) => setfechaInicio(e.target.value);
  const handleFechaFinChange = (e) => setFechaFin(e.target.value);
  const handleFechaVentaChange = (e) => setFechaVenta(e.target.value);
  const handleTipoVentaChange = (e) => setTipoVenta(e.target.value);
  const handletipoPersonaChange = (e) => settipoPersona(e.target.value);
  const handletipoTransporteChange = (e) => settipoTransporte(e.target.value);

  const handlecodPaisChange = (e) => setcodPais(e.target.value);
  const handlemontoptChange = (e) => setmontopt(e.target.value);
  const handlemonto2ptChange = (e) => setmonto2pt(e.target.value);
  const handlePaqueteChange = (e) => setidPt(e.target.value);

  //Generar pdf

  const Enviar = () => {};

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Cedula: " + cedula, 10, 10);
    doc.text("Codigo de pais: " + phoneNumber, 10, 30);
    doc.text("Numero de celular: " + codPais, 10, 30);
    doc.text("Paquete turistico: " + idPt, 10, 40);
    doc.text("Fecha de Inicio: " + fechaInicio, 10, 60);
    doc.text("Fecha de Fin: " + fechaFin, 10, 60);
    doc.text("Referencia de pago: " + RefPago, 10, 100);
    doc.text("Puesto en transporte: " + puestoT, 10, 100);
    doc.save("boleto.pdf");
  };

  //Validacion para que el numero de celular no sea mayor ni menor a 11 digitos

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e) => {
    const enteredPhoneNumber = e.target.value;
    // Expresión regular para permitir solo números y el signo de "+" al inicio,
    // y limitar la longitud a 12 dígitos.
    const phonePattern = /^(\+)?\d{0,12}$/;

    if (phonePattern.test(enteredPhoneNumber)) {
      setPhoneNumber(enteredPhoneNumber);
    } else {
      alert("Por favor, digite maximo 12 digitos numericos.");
      // Si el valor ingresado no cumple con el patrón, no se actualiza el estado.
      // Esto efectivamente impide que se escriban letras o que se exceda el límite de 12 dígitos.
    }
  };

  //Validacion para que solo se permita numeros

  //Validacion para entregar el permiso de viaje en formato pdf
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      const validFileTypes = ["application/pdf"];

      if (validFileTypes.includes(fileType)) {
        // Procesa el archivo PDF
        console.log("Archivo PDF válido:", file);
        // Aquí puedes implementar la lógica para guardar o procesar el archivo PDF
      } else {
        alert("Por favor, selecciona un archivo PDF.");
      }
    }
  };

  return (
    <>
      <h2 className="ventas">Ventas de Boletos</h2>

      <br />
      <br />
      <br />
      <br />

      <div
        className="centrarform"
        style={{
          float: "left",
        }}
      >
        <div className="box">
          <Container>
            <Form action="/registrar" method="post">
              <FormGroup>
                <h2>Ingrese los datos de venta</h2>
              </FormGroup>

              <div style={{ display: "flex", gap: "10px", width: "300px" }}>
                <FormGroup>
                  <Label htmlFor="tipoPersona" style={{ whiteSpace: "nowrap" }}>Tipo de persona:</Label>
                  <Input
                    id="tipoPersona"
                    name="tipoPersona"
                    type="select"
                    value={tipoPersona}
                    style={{ width: "100px" }}
                    required
                    onChange={handletipoPersonaChange}
                  >
                    <option value={""}>Elige</option>
                    <option>Venezolano-</option>
                    <option>Extranjero-</option>
                    <option>Juridico-</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label style={{ whiteSpace: "nowrap" }}>Cedula de identidad:</Label>
                  <Input
                    type="text"
                    name="cedula"
                    value={cedula}
                    required
                    onChange={handleCedulaChange}
                    style={{
                      borderColor: isValidCedula ? "green" : "red",
                      width: "100px",
                    }}
                  />
                  {!isValidCedula && (
                    <p>
                      Cédula no válida. Debe tener entre 7 y 8 dígitos numericos
                    </p>
                  )}
                </FormGroup>
              </div>

              <div style={{ display: "flex", gap: "10px", width: "200px" }}>
                <FormGroup>
                  <Label htmlFor="tipoTransporte" style={{ whiteSpace: "nowrap" }}>Tipo de transporte:</Label>
                  <Input
                    type="select"
                    name="tipoTransporte"
                    id="tipoTransporte"
                    value={tipoTransporte}
                    onChange={handletipoTransporteChange}
                    style={{ width: "125px" }}
                  >
                    <option value="">Seleccione</option>
                    <option value="Avion">Avion</option>
                    <option value="Autobus">Autobus</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="puestoT" style={{ whiteSpace: "nowrap" }}>Puesto:</Label>
                  <br />
                  <Input
                    id="puestoT"
                    name="puestoT"
                    type="text"
                    value={puestoT}
                    readOnly
                    onClick={generateRandompuestoT}
                    style={{ cursor: "pointer", width: "50px" }}
                  />
                </FormGroup>


                <FormGroup>
                  <Label htmlFor="cantidadMaxPuesto" style={{ whiteSpace: "nowrap" }}>Cantidad max de puestos:</Label>
                  <br />
                  <Input
                    id="cantidadMaxPuesto"
                    name="cantidadMaxPuesto"
                    type="text"
                    value={maxAsientos - asientosVendidos}
                    readOnly
                    style={{ cursor: "pointer", width: "50px" }}
                  />
                </FormGroup>

              </div>

              <div style={{ display: "flex", gap: "10px", width: "200px" }}>
                <FormGroup>
                  <Label htmlFor="codPais" style={{ whiteSpace: "nowrap" }}>Codigo de pais:</Label>
                  <Input
                    id="codPais"
                    name="codPais"
                    type="select"
                    value={codPais}
                    onChange={handlecodPaisChange}
                    required
                    style={{ width: "90px" }}
                  >
                    <option value="">Elige</option>
                    <option value="Vzla">+58</option>
                  </Input>
                </FormGroup>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                ></div>

                <FormGroup>
                  <Label htmlFor="phone" style={{ whiteSpace: "nowrap" }}>Numero de celular:</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Ingresa tu numero de tlf"
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    required
                    style={{ width: "200px" }}
                  />
                </FormGroup>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                ></div>
              </div>

              <div style={{ display: "flex", gap: "10px", width: "200px" }}>
                <FormGroup>
                  <Label htmlFor="idPt">Paquete turistico:</Label>
                  <Input
                    id="idPt"
                    name="idPt"
                    placeholder="Seleccione el paquete turistico"
                    type="select"
                    value={idPt}
                    onChange={handlePaqueteChange}
                    required
                    style={{ width: "160px" }}
                  >
                    <option value={""}>Seleccione</option>
                    <option value={1}>Cayo Sal</option>
                    <option value={2}>Cayo Sombrero</option>
                    <option value={3}>Medanos de Coro</option>
                    <option value={4}>Medanos de Coro</option>
                    <option value={5}>Medanos de Coro</option>
                    <option value={6}>Medanos de Coro</option>
                    <option value={7}>Medanos de Coro</option>
                    <option value={8}>Medanos de Coro</option>
                    <option value={9}>Medanos de Coro</option>
                    <option value={10}>Medanos de Coro</option>
                  </Input>
                </FormGroup>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                ></div>

                <FormGroup>
                  <Label htmlFor="tipoMoneda" style={{ whiteSpace: "nowrap" }}>Tipo de moneda:</Label>
                  <Input
                    id="tipoMoneda"
                    name="tipoMoneda"
                    type="select"
                    required
                    style={{ width: "90px" }}
                  >
                    <option value={""}>Elige</option>
                    <option>$</option>
                    <option>€</option>
                    <option>Bss</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="montopt" style={{ whiteSpace: "nowrap" }}>Monto pt:</Label>
                  <Input
                    id="montopt"
                    name="montopt"
                    type="text"
                    value={montopt}
                    onChange={handlemontoptChange}
                    required
                    style={{ width: "90px" }}
                  />
                </FormGroup>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "200px",
                }}
              >
                <FormGroup>
                  <Label htmlFor="fechaInicio">Fecha de inicio:</Label>
                  <Input
                    id="fechaInicio"
                    name="fechaInicio"
                    type="date"
                    required
                    style={{ width: "150px" }}
                    value={fechaInicio}
                    onChange={handlefechaInicioChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </FormGroup>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                ></div>

                <FormGroup>
                  <Label htmlFor="fechaFin">Fecha de fin:</Label>
                  <Input
                    id="fechaFin"
                    name="fechaFin"
                    type="date"
                    required
                    style={{ width: "150px" }}
                    value={fechaFin}
                    onChange={handleFechaFinChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </FormGroup>
              </div>

              <div style={{ display: "flex", gap: "10px", width: "300px" }}>
                <FormGroup>
                  <Label htmlFor="fechaVenta">Fecha de venta:</Label>
                  <Input
                    id="fechaVenta"
                    name="fechaVenta"
                    placeholder="Ingrese la fecha de la venta"
                    type="date"
                    required
                    style={{ width: "150px" }}
                    value={fechaVenta}
                    onChange={handleFechaVentaChange}
                    min={new Date().toISOString().split('T')[0]}
                    max={new Date().toISOString().split('T')[0]}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="tipoVenta">Tipo de venta:</Label>
                  <Input
                    id="tipoVenta"
                    name="tipoVenta"
                    type="select"
                    required
                    value={tipoVenta}
                    onChange={handleTipoVentaChange}
                    style={{ width: "200px" }}
                  >
                    <option value={""}>Seleccione</option>
                    <option>Agente Autorizado</option>
                    <option>Redes Sociales</option>
                    <option>Agencia</option>
                  </Input>
                </FormGroup>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              ></div>

              <FormGroup>
                <Label htmlFor="Menoredad">¿Es menor de edad?</Label>
                <Input
                  id="Menoredad"
                  name="Menoredad"
                  type="select"
                  required
                  onChange={handleMenorChange}
                  style={{ width: "150px" }}
                >
                  <option value={""}>Seleccione</option>
                  <option>Si</option>
                  <option>No</option>
                </Input>
              </FormGroup>
              {esMenor && (
                <FormGroup>
                  <Label for="permisoViaje">Permiso de viaje:</Label>
                  <Input 
                  id="permisoViaje" 
                  name="file" 
                  type="file" />
                </FormGroup>


              )}
              <button onClick={Enviar} type="submit" class="btn btn-primary">
                Siguiente
              </button>
              <button onClick={generatePDF} class="btn btn-primary">
                🖨️ Imprimir boleto en pdf
              </button>
            </Form>
          </Container>
        </div>
      </div>

      {/*AQUI EMPIEZA EL FORMULARIO DE COBROS*/}

      <Container className="form2">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "rigth",
          }}
        >
          <div className="box">
            <Container>
              <Form action="/registrar" method="post">
                <FormGroup>
                  <h2>Datos de cobro</h2>
                </FormGroup>

                <div style={{ display: "flex", gap: "10px", width: "200px" }}>
                  <FormGroup>
                    <Label htmlFor="tipoMoneda">Tipo de moneda:</Label>
                    <Input
                      id="tipoMoneda"
                      name="tipoMoneda"
                      type="select"
                      required
                      style={{ width: "150px" }}
                    >
                      <option value={""}>Seleccione</option>
                      <option>$</option>
                      <option>€</option>
                      <option>Bss</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="monto2pt" style={{ whiteSpace: "nowrap" }}>Monto pt:</Label>
                    <Input
                      id="montopt"
                      name="montopt"
                      type="text"
                      value={monto2pt}
                      onChange={handlemonto2ptChange}
                      required
                      style={{ width: "90px" }}
                    />
                  </FormGroup>
                </div>

                <FormGroup>
                <Label htmlFor="tipoCobro">Tipo de cobro:</Label> 
                <Input
                    id="tipoCobro"
                    name="tipoCobro"
                    type="select"
                    required
                    style={{ width: "150px" }}
                    value={tipoCobro}
                    onChange={handleTipoCobroChange}
                >
                    <option value={""}>Seleccione</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Debito">Débito</option>
                    <option value="Credito">Crédito</option>
                    <option value="Pago Movil">Pago Móvil</option>
                </Input>
                </FormGroup>


            <FormGroup>
            <Label>Seleccione una opción:</Label>
            <Input
                type="select"
                value={seleccion} 
                onChange={handleSeleccionChange}
                style={{ width: "250px" }}
            >
              <option value="">Selecciona</option>
                <option value="ref">Escriba la referencia de pago</option>
                {tipoCobro === 'Efectivo' && (
                <option value="autoRef">Referencia de pago nueva</option>
                )}
            </Input>
            </FormGroup>

            {seleccion === 'autoRef' && tipoCobro === 'Efectivo' && (
                <div>
                  <div style={{ marginTop: "10px" }}></div>
                  <Label htmlFor="AutoRefPago">Referencia de pago:</Label>
                  <Input
                    id="AutoRefPago"
                    type="text"
                    name="AutoRefPago"
                    value={AutoRefPago}
                    readOnly
                    style={{ width: "150px" }}
                  />
                </div>
            )}

            {seleccion === 'ref' && ["Efectivo","Debito", "Credito", "Pago Movil"].includes(tipoCobro) && (

                <div style={{ marginTop: "10px" }}>
                  <FormGroup>
                  <Label htmlFor="RefPago">Referencia de pago:</Label>
                  <Input
                    id="RefPago"
                    type="text"
                    name="RefPago"
                    value={RefPago}
                    onChange={(e) => setRefPago(e.target.value)}
                    style={{ width: "150px" }}
                  />
                  </FormGroup>
                </div>
            )}
                <button onClick={Enviar} type="submit" class="btn btn-primary">
                  Guardar
                </button>
              </Form>
            </Container>
          </div>
        </div>
      </Container>
    </>
    );
  };
export default VentasBoletos;
