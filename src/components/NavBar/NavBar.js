import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../image/Logo.png';
import { useNavigate } from 'react-router-dom';

function NavBar(props) {

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const navigate = useNavigate();


   function Ordenes(){
    navigate('/');
   }

   function Historico(){
    navigate('/Historico');
   }

   function Productos(){
    navigate('/Productos');
   }

    return (
      <>
         <Navbar bg="dark" variant='dark' expand="lg" sticky='top'>
      <Container fluid>
        <Navbar.Brand className='justify-content-center'> 
        <img src={Logo}  style={{ Height: '70px', width: '70px', marginRight: '10px'  }}></img> 
        <span>{props.path}</span>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            
            <Nav.Link onClick={Ordenes}>Ordenes</Nav.Link>
            <Nav.Link onClick={Productos}>Productos</Nav.Link>
            <Nav.Link  onClick={Historico}>Historico</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
  }
  
  export default NavBar;