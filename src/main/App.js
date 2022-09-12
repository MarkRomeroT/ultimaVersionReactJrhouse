import { BrowserRouter, Routes, Route } from "react-router-dom";
import Historicos from "../Pages/Historicos/Historicos";
import NuevaOrden from "../Pages/Home/NuevaOrden";
import Ordenes from "../Pages/Home/Ordenes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Ordenes/>} />
        <Route path="/nuevaOrden" element={<NuevaOrden/>} />
        <Route path="edit/:id" element={<NuevaOrden />} />
        <Route path="/Historico" element={<Historicos />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
