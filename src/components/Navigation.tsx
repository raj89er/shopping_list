import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (
        <Navbar expand='lg' data-bs-theme='light' bg='light' className='border-bottom border-2'>
            <Container fluid>
                <Navbar.Brand href='/'>Shopping List App</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

