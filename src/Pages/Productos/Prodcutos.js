import Producto from "../../components/Productos/Productos";
import NavBar from "../../components/NavBar/NavBar";
import OptionsNav from "../../components/Productos/OptionsNavNewProdcut";

function Productos() {
  return (
    <div className="Productos">
      <NavBar
      path="Productos"
      />

      <Producto/>

      <OptionsNav/>
    </div>
  );
}

export default Productos;