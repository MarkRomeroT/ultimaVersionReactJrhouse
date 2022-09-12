import Historico from "../../components/Historico/Historico";
import NavBar from "../../components/NavBar/NavBar";
import OptionsHistorico from "../../components/OptionsNav/OptionsHistorico";

function Historicos() {
  return (
    <div className="Historicos">
      <NavBar
      path="Historicos"
      />

      <Historico/>

     
    </div>
  );
}

export default Historicos;