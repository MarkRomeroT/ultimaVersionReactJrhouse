import { BrowserRouter, Routes, Route } from "react-router-dom";
import Historicos from "../Pages/Historicos/Historicos";
import NuevaOrden from "../Pages/Home/NuevaOrden";
import Ordenes from "../Pages/Home/Ordenes";
import Productos from "../Pages/Productos/Prodcutos";
import NuevoProducto from "../Pages/Productos/NuevoProducto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Ordenes/>} />
        <Route path="/nuevaOrden" element={<NuevaOrden/>} />
        <Route path="edit/:id" element={<NuevaOrden />} />
        
        <Route path="/Historico" element={<Historicos />} />

        <Route path="/Productos" element={<Productos />} />
        <Route path="/nuevoProducto" element={<NuevoProducto />} />
        <Route path="editProducto/:id" element={<NuevoProducto />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
