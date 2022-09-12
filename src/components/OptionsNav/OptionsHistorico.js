import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function OptionsNav(props) {
    
   // eslint-disable-next-line react-hooks/rules-of-hooks
 const navigate = useNavigate();

 function Inicio(){
   navigate('/');
  }

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })

  return (
    <>
    <Navbar bg="dark" variant="dark" fixed='bottom'>
        <Container>
          <Nav className="mx-auto">
            <h1 style={{color: "white"}}>Total: {formatterPeso.format( props.total)}</h1>
          </Nav>
        </Container>
      </Navbar>
           
          
    </>
  );
}

export default OptionsNav;