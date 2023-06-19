import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import ost from './segments/images/ost.jpeg'

function BrandExample() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            
            OST BLogs
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;