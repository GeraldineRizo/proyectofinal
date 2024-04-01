import { Form, FormGroup, Label, Input, Container } from "reactstrap";
import "../estilos/espacio.css";
import { useState } from "react";
import jsPDF from "jspdf";

function Devoluciones() {
  const [cedula, setCedula] = useState("");
  const [isValidCedula, setIsValidCedula] = useState(true);

  const handleCedulaChange = (e) => {
    setCedula(e.target.value);
    setIsValidCedula(validateCedula(e.target.value));
  };

  const validateCedula = (cedula) => {
    return cedula.length >= 7 && cedula.length <= 8;
  };

  const [tipoCobro, setTipoCobro] = useState("");
  const [RefPago, setRefPago] = useState("");

  const handleTipoCobroChange = (e) => {
    setTipoCobro(e.target.value);
    // Removed logic for generating autoRefPago
  };
  const [fechaDevolucion, setFechaDevolucion] = useState("");
  const [tipoDevolucion, setTipoDevolucion] = useState("");
  const [montopt, setmontopt] = useState("");

  const handlemontoptChange = (e) => setmontopt(e.target.value);
  const handleFechaDevolucionChange = (e) => setFechaDevolucion(e.target.value);
  const handleTipoDevolucionChange = (e) => setTipoDevolucion(e.target.value);
  const Enviar = () => {};

  //Generar pdf

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Cedula: " + cedula, 10, 10);
    doc.text("Referencia de pago: " + RefPago, 10, 100);
    doc.text("Tipo de Devolucion: " + tipoDevolucion, 10, 20); // Asegúrate de tener un estado para tipoDevolucion
    doc.text("Fecha de Devolucion: " + fechaDevolucion, 10, 60); // Asegúrate de tener un estado para fechaViaje
    doc.text("Monto: " + montopt, 10, 120); // Asegúrate de tener un estado para montoTotal
    doc.save("devolucion.pdf");
  };

  return (
    <>
      <h2 className="Devoluciones">Devoluciones</h2>

      <br />
      <br />
      <br />

      <div className="centrarform">
        <div className="box">
          <Container>
            <Form action="/devoluciones" method="post">
              <div
                style={{ display: "flex", gap: "10px", width: "200px" }}
              ></div>
              <FormGroup>
                <h2>Ingrese los datos solicitados para la devolucion</h2>

                <div style={{ display: "flex", gap: "10px", width: "300px" }}>
                  <FormGroup>
                    <Label htmlFor="tipoP" style={{ whiteSpace: "nowrap" }}>
                      Tipo de persona:
                    </Label>
                    <Input
                      id="tipoP"
                      name="tipoP"
                      type="select"
                      style={{ width: "100px" }}
                      required
                    >
                      <option value={""}>Elige</option>
                      <option>Venezolano-</option>
                      <option>Extranjero-</option>
                      <option>Juridico-</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label style={{ whiteSpace: "nowrap" }}>
                      Cedula de identidad:
                    </Label>
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
                        Cédula no válida. Debe tener entre 7 y 8 dígitos
                        numericos
                      </p>
                    )}
                  </FormGroup>
                </div>

                <div style={{ display: "flex", gap: "10px", width: "200px" }}>
                  <FormGroup>
                    <Label htmlFor="tipoDev">Tipo de Devolucion</Label>
                    <Input
                      id="tipoDev"
                      name="tipoDev"
                      type="select"
                      value={tipoDevolucion}
                      onChange={handleTipoDevolucionChange}
                      style={{ width: "480px" }}
                    >
                      <option>Seleccione</option>
                      <option>
                        No se vendio más de la mitad de los boletos de un PT
                      </option>
                      <option>
                        Modificación de las condiciones del viaje sin previo
                        aviso{" "}
                      </option>
                    </Input>
                  </FormGroup>
                </div>

                <div style={{ display: "flex", gap: "10px", width: "200px" }}>
                  <FormGroup>
                    <Label htmlFor="fechaDev">Fecha de la devolucion</Label>
                    <Input
                      id="fechaDev"
                      name="fechaDev"
                      placeholder="Ingrese la fecha de la devolucion"
                      type="date"
                      style={{ width: "150px" }}
                      value={fechaDevolucion}
                      onChange={handleFechaDevolucionChange}
                      min={new Date().toISOString().split("T")[0]} 
                    />
                  </FormGroup>
                </div>

                <div style={{ display: "flex", gap: "10px", width: "200px" }}>
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
                    <Label htmlFor="montopt" style={{ whiteSpace: "nowrap" }}>
                      Monto pt:
                    </Label>
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

                <button onClick={Enviar} type="submit" className="btn btn-primary">
                  Enviar
                </button>
                <button onClick={generatePDF} className="btn btn-primary">
                  🖨️ Imprimir boleto en pdf
                </button>
              </FormGroup>
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
}
export default Devoluciones;
