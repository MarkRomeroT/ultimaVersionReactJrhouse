import NavBar from "../../components/NavBar/NavBar";
import NewOrden from "../../components/NuevaOrden/NewOrden";
function NuevaOrden() {
  return (
    <div className="NuevaOrden">
      <NavBar
      path="NuevaOrden"
      />

       <NewOrden/>
    
    </div>
  );
}

export default NuevaOrden;