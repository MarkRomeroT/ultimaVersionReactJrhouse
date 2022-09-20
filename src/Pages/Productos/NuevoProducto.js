import NavBar from "../../components/NavBar/NavBar";
import  NuevoProducto2 from "../../components/Productos/nuevoProducto";

function NuevoProducto() {
  return (
    <div className="NuevoProducto">
      <NavBar
      path="NuevoProducto"
      />

       <NuevoProducto2/>
    
    </div>
  );
}

export default NuevoProducto;