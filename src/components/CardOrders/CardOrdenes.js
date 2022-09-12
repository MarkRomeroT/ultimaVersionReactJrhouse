import { updateWebsite, getWebsite } from "../../firebase/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaDonate,FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function CardOrdenes({ link }) {
  const navigate = useNavigate();

  const MySwal = withReactContent(Swal)

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

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

   swalWithBootstrapButtons.fire({
  title: 'Estas seguro que el pedido ya esta pago?',
  text: "No podras revertir esto!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Si, pasar a historico',
  cancelButtonText: 'No, cancelar!',
  reverseButtons: true
}).then(async (result) => {

  if (result.isConfirmed) {
        // -------------------------------------
      await updateWebsite(link.id, website);
      toast("Updated", {
        type: "success",
      });
    // Clean Form
    setWebsite(initialState);
    // -------------------------------------
    window.location.reload();

  } else if (
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelado',
      'No se movio a el historico',
      'error'
    )
  }
})


      
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
      <div className="card-body" style={{backgroundColor: "white", color: "black", border: "solid black"}}>
        
      
        <div className="d-flex justify-content-between">
          <h4>Mesa #{link.numero}</h4>
          
          
          <form onSubmit={
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
               </form>
         

        </div>


        <div className="d-flex justify-content-between">
        <p>{link.pedido}</p>
      
        <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={() => navigate(`/edit/${link.id}`)}
            style={{backgroundColor: "transparent", border: "none"}}
          >
            <FaEdit style={{height: "40px", width: "40px", color: "#11E1A8"}}/>
          </button>
          </div>
        <p>{total}</p>

        <div className="d-flex justify-content-end">
        <p>{link.fecha}</p>
        </div>

      </div>
    </div>
  );
}