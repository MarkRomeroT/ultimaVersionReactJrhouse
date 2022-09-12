import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveWebsite, getWebsite, updateWebsite } from "../../firebase/api";
import { useParams, useNavigate } from "react-router-dom";
import OptionsNav from "../OptionsNav/OptionsNavNew";




const initialState = {
  numero: "",
  activo: "",
  pedido: "",
  total: "",
  fecha: "",
};

const NewOrden = () => {

  const [website, setWebsite] = useState(initialState);
  const [estado, setEstado] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) =>
    setWebsite({ ...website, [name]: value });

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    const date = hoy.toISOString().substring(0,10);
 
    function asigned() {
      setWebsite({ ...website, activo: true, fecha: date });
    }
   
   


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    console.log(website);

    if (!params.id) {
      await saveWebsite(website);
      toast("New Link Added", {
        type: "success",
      });
    } else {
      await updateWebsite(params.id, website);
      toast("Updated", {
        type: "success",
      });
    }

    // Clean Form
    setWebsite(initialState);
    navigate("/");
  };

  const getLinkById = async (id) => {
    try {
      const doc = await getWebsite(id);
      setEstado(true);
      setWebsite({ ...doc.data() });
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
        <label htmlFor="url">Mesa:</label>
        <div className="input-group mb-3">
        <input
            type="number"
            className="form-control mb-2"
            placeholder="1"
            value={website.numero}
            name="numero"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="description">Pedido:</label>
        <textarea
          rows="3"
          className="form-control mb-3"
          placeholder="Escribe el pedido del cliente"
          name="pedido"
          value={website.pedido}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="description">Total:</label>
        <input
            type="number"
            className="form-control mb-2"
            placeholder="1000000"
            value={website.total}
            name="total"
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
    <OptionsNav/>
    </>
  );
};

export default NewOrden;