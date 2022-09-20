import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveProducto, getProducto, updateProducto } from "../../firebase/api";
import { useParams, useNavigate } from "react-router-dom";
import OptionsNavExit from "../Productos/OptionsNavExit";


const initialState = {
  nombre: "",
  valor: "",
};

const NewOrden = () => {

  const [Producto, setProducto] = useState(initialState);
  const [estado, setEstado] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) =>
    // console.log(value);
    setProducto({ ...Producto, [name]: value });




    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const date = hoy.toISOString().substring(0,10);
 

    function asigned() {
      setProducto({ ...Producto, activo: true, fecha: date });
    }
   
   


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    console.log(Producto);

    if (!params.id) {
      await saveProducto(Producto);
      toast("New Link Added", {
        type: "success",
      });
    } else {
      await updateProducto(params.id, Producto);
      toast("Updated", {
        type: "success",
      });
    }

    // Clean Form
    setProducto(initialState);
    navigate("/Productos");
  };

  const getLinkById = async (id) => {
    try {
      const doc = await getProducto(id);
      setEstado(true);
      setProducto({ ...doc.data() });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getLinkById(params.id);
    }
  }, [params.id]);

  return (
    <>
    <div className="col-md-4 offset-md-4">
      <form onSubmit={
        handleSubmit} className="card card-body bg-white">
        
        <label htmlFor="description">NOMBRE:</label>
        <input
            type="text"
            className="form-control mb-2"
            placeholder="perro caliente"
            value={Producto.nombre}
            name="nombre"
            onChange={handleInputChange}
          />

          <label htmlFor="description">VALOR:</label>
          <input
            type="number"
            className="form-control mb-2"
            placeholder="4000"
            value={Producto.valor}
            name="valor"
            onChange={handleInputChange}
          />

        <button
          type="submit"         
         className="btn btn-primary btn-block"
         onClick={asigned}
        >
           {estado === false ? "Guardar" : "Actualizar"}
        </button>
      </form>



    </div>
    <OptionsNavExit/>
    </>
  );
};

export default NewOrden;