        import './clinic.css';
        import React from 'react';
        import { Link } from 'react-router-dom';
        import Container from 'react-bootstrap/Container';
        import Nav from 'react-bootstrap/Nav';
        import Navbar from 'react-bootstrap/Navbar';

        function Dryneedling() {
        return (
            <div>
            <header className='sticky-header'>
                <Navbar className="navbar-with-shadow" bg="light" expand="lg" fixed="top">
                <Container className='ret'>
                    <Navbar.Brand as={Link} to="/">Rebalance</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/"><b>Home</b></Nav.Link>
                        <Nav.Link href="https://goo.gl/maps/5kjjRq2Gz4bw7iQY8"><b>Location</b></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </header>
                    <div>
                        


                    </div>
            </div>
        );
        }

        export default Dryneedling;
