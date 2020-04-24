import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';

export default function Header() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Nav className="mr-auto"> 
                    <Nav.Link href="/add">Ajouter une recette  </Nav.Link>
                    <Nav.Link href="/list"> La liste des recttes </Nav.Link>
                </Nav>
            </Navbar>
        );
}