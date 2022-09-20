import { updateWebsite, getWebsite } from "../../firebase/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaDonate,FaEdit } from "react-icons/fa";

 function CardHistorico({ link }) {
  const navigate = useNavigate();

  const initialState = {
    numero: "",
    activo: "",
    pedido: "",
    total: "",
    fecha: "",
  };

  const [website, setWebsite] = useState(initialState);

  function asigned() {
    setWebsite({ ...website, activo: false });
  }
  
  const getLinkById = async (id) => {
    try {
      const doc = await getWebsite(id);
      setWebsite({ ...doc.data() });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    if (window.confirm("Seguro de que el pedido ya fue pagado?")) {
      await updateWebsite(link.id, website);
      toast("Updated", {
        type: "success",
      });
    }
    // Clean Form
    setWebsite(initialState);
    window.location.reload();
  };
  
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })

  const total = formatterPeso.format(link.total);

  useEffect(() => {
    if (link.id) {
      getLinkById(link.id);
    }
  }, [link.id]);


  
  return (
    <div className="card m-1 mb-2 card-website">
      <div className="card-body"  style={{backgroundColor: "white", color: "black", border: "solid black", borderRadius: "30px"}}>
        <div className="d-flex justify-content-between">
          <h4>{link.tipo}</h4>
          
          {/* <form onSubmit={
        handleSubmit} >
          <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={(e) => {
              e.stopPropagation();
              getLinkById(link.id);
              asigned();
            }}
            style={{backgroundColor: "transparent", border: "none"}}
          >
            <FaDonate style={{height: "40px", width: "40px", color: "#0DEE5B"}}/>
          </button>
               </form> */}
         

        </div>

        <div className="d-flex justify-content-between">
        <p>{link.pedido}</p>
      
        {/* <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={() => navigate(`/edit/${link.id}`)}
            style={{backgroundColor: "transparent", border: "none"}}
          >
            <FaEdit style={{height: "40px", width: "40px", color: "#11E1A8"}}/>
          </button> */}
          
          </div>
        <p>{total}</p>

        <div className="d-flex justify-content-end">
        <p>{link.fecha}</p>
        </div>

      </div>
    </div>
  );
}

export default CardHistorico;