import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function OptionsNav() {
    
   // eslint-disable-next-line react-hooks/rules-of-hooks
 const navigate = useNavigate();

 function Inicio(){
   navigate('/');
  }

  return (
    <>
    <Navbar bg="dark" variant="dark" fixed='bottom'>
        <Container>
          <Nav className="mx-auto">
          <Button variant="success" className="me-2" onClick={Inicio}>Volver a las Ordenes</Button>
          </Nav>
        </Container>
      </Navbar>
           
          
    </>
  );
}

export default OptionsNav;