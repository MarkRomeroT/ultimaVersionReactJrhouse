import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function OptionsNav() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  function nuevoProducto(){
    navigate('/nuevoProducto');
   }

  return (
    <>
    <Navbar bg="dark" variant="dark" fixed='bottom'>
        <Container>
          <Nav className="mx-auto">
            <Button variant="success" className="me-2" onClick={nuevoProducto}>Nuevo Producto</Button>
            {/* <Button variant="danger" className="me-2">Opcion 2</Button>
            <Button variant="light" className="me-2">Opcion 3</Button> */}
          </Nav>
        </Container>
      </Navbar>
           
          
    </>
  );
}

export default OptionsNav;