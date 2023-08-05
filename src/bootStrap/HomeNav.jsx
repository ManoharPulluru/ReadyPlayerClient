import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HomeNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <div className='logo'>
                    <Navbar.Brand href="#">
                        <img src='https://assets-global.website-files.com/647798cf71ec2048ea89ab07/647817558bc1d570b250c81e_RPM-logo.svg' />
                    </Navbar.Brand>
                </div>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll >
                            
                        <div className='center'>
                            
                        </div>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HomeNav;