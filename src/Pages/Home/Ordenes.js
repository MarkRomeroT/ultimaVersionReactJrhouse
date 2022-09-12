import { ListOrdenes } from "../../components/ListOrdenes/ListOrdenes";
import NavBar from "../../components/NavBar/NavBar";
import OptionsNav from "../../components/OptionsNav/OptionsNav";

function Ordenes() {
  return (
    <div className="Ordenes">
      <NavBar
      path="Ordenes"
      />

      <ListOrdenes/>

      <OptionsNav/>
    </div>
  );
}

export default Ordenes;
