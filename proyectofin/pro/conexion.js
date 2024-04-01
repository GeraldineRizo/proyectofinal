import express from 'express';
import path from 'path';
import mysql from 'mysql'; // Importa mysql2/promise para soporte de promesas

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Conexión con el manejador de db
let conexion;

async function connectDatabase() {
 try {
    conexion = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "miproyecto"
    });
    console.log('Conexión a la base de datos establecida');
 } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
 }
}

connectDatabase();

// Sirve los archivos estáticos de la aplicación React
app.use(express.static(path.join(__dirname, 'dist')));

// Asegúrate de que todas las solicitudes se redirijan al archivo index.html
// para que React Router funcione correctamente
app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Insertar incidentes a la base de datos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req,res){
    res.render("registrar");
})

app.post("/devoluciones",(req,res)=>{
    const {tipoP,cedula,tipoDevolucion,fechaDev}=req.body;
    conexion.query("INSERT INTO `tipos_devoluciones`( `tipos_devoluciones`, `fecha`) VALUES (?,?)"[tipoDevolucion,fechaDev], (error, resultados) => {
        if (error) {
            console.error('Error actualizando datos:', error);
            res.status(500).send('Error actualizando datos');
        } else {
            console.log('Datos actualizados exitosamente');
        }
})

})
app.post("/registrar", function(req,res){

  const datos = req.body;
    let tipoMoneda = datos.tipoMoneda;
    let montopt = datos.montopt;
    let RefPago = datos.RefPago;
    let AutoRefPago = datos.AutoRefPago;
    let tipoPersona = datos.tipoPersona;
    let cedula = datos.cedula;
    let tipoTransporte = datos.tipoTransporte;
    let fechaVenta = datos.fechaVenta;
    let tipoVenta = datos.tipoVenta;
    let puestoT = datos.puestoT;
 

    
    let registrar ="INSERT INTO `cobros`(`tipo_moneda`, `monto`, `Ref_Pago`, `autoRef_Pago`) VALUES ('"+tipoMoneda+"','"+montopt+"','"+RefPago+"' ,'"+AutoRefPago+"')"

    conexion.query(registrar,function(error){
        if(error){
            console.log(error);
        }else{
            console.log("Registro exitoso");
        }      
    });

    let ventab ="INSERT INTO `ventas_boletos`(`cedula`, `tipo_persona`, `tipo_transporte`, `fecha_venta`, `tipo_venta`, `numero_puesto`) VALUES ('"+cedula+"','"+tipoPersona+"','"+tipoTransporte+"','"+fechaVenta+"','"+tipoVenta+"','"+puestoT+"')"
    conexion.query(ventab,function(error){
        if(error){
            console.log(error);
        }else{
            console.log("Registro exitoso");
        }      
    });
})





app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
});

