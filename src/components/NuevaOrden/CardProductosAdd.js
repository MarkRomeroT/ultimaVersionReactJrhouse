import { updateProducto, getProducto } from "../../firebase/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaPlus,FaMinus } from "react-icons/fa";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

 function CardProducto({ link }) {
  
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
    nombre: "",
    valor: "",
  };

  const [Producto, setProducto] = useState(initialState);

  function asigned() {
    setProducto({ ...Producto, activo: false });
  }
  
  const getLinkById = async (id) => {
    try {
      const doc = await getProducto(id);
      setProducto({ ...doc.data() });
    } catch (error) {
      console.error(error);
    }
  };

  
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })

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
      await updateProducto(link.id, Producto);
      toast("Updated", {
        type: "success",
      });
    // Clean Form
    setProducto(initialState);
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


  useEffect(() => {
    if (link.id) {
      getLinkById(link.id);
    }
  }, [link.id]);


  
  return (
    <div className="card m-1 mb-2 card-Producto">
      <div className="card-body"  style={{backgroundColor: "white", color: "black", border: "solid black", borderRadius: "30px"}}>
      <form onSubmit={
        handleSubmit} >
        <div className="d-flex justify-content-between">
          <div>
          <p className="m-1"  style={{maxWidth: "120px", minWidth: "200px"}}>{link.nombre}</p>
          </div>
          <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={() => navigate(``)}
            style={{backgroundColor: "transparent", border: "none"}}
          >
            <FaMinus style={{height: "30px", width: "30px", color: "#E12711"}}/>
          </button>
          
          <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={() => navigate(``)}
            style={{backgroundColor: "transparent", border: "none"}}
          >
            <FaPlus style={{height: "30px", width: "30px", color: "#21E111"}}/>
          </button>

          

        
        </div>
        </form>
      </div>
    </div>
  );
}

export default CardProducto;