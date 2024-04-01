import { Outlet, Link } from "react-router-dom";
import '../estilos/espacio.css'
import {Button} from "reactstrap"
const Home = () =>{
return (

    <div className="caja"> 

   <div className="es" ><Link to="/VentasBoletos"><Button  color="primary" className="boton">Ventas de boletos </Button></Link></div> 
   <div className="es"><Link to="/Devoluciones"><Button  color="primary">Devoluciones </Button></Link></div> 
<Outlet />
</div>
    )
}

export default Home;