import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveWebsite, getWebsite, updateWebsite, getProductos } from "../../firebase/api";
import { useParams, useNavigate } from "react-router-dom";
import OptionsNav from "../OptionsNav/OptionsNavNew";
import CardProductosAdd from "./CardProductosAdd";




const initialState = {
  tipo: "",
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
    // console.log(value);
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


  const [productos, setProductos] = useState([]);

  const getProductosLinks = async () => {
    const querySnapshot = await getProductos();
    const docs = [];
    querySnapshot.forEach((doc) => {
    
        docs.push({ ...doc.data(), id: doc.id });

    });
    setProductos(docs);
  };


  console.log(productos);

  useEffect(() => {
    if (params.id) {
      getLinkById(params.id);
    }
    getProductosLinks();
  }, [params.id]);

  return (
    <>
    <div className="col-md-4 offset-md-4">
      <form onSubmit={
        handleSubmit} className="card card-body bg-white">
        <label htmlFor="url">TIPO:</label>
        <div className="input-group mb-3">
        <select
         className="form-control mb-2"
         name="tipo"
         value={website.tipo}
         onChange={handleInputChange}
        >
          <option>...</option>
          <option value="LOCAL">LOCAL</option>
          <option value="DOMICILIO">DOMICILIO</option>
        </select>
        </div>

        {productos.map((link) => (
          
          <div className="col-md-4" key={link.id}>
            <CardProductosAdd link={link} />
          </div>
          
      ))}


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