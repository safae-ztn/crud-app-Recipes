import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';

export default function Header() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto"> 
                    <Nav.Link href="/add">Ajouter une recette  </Nav.Link>
                    <Nav.Link href="/list"> Liste des recettes </Nav.Link>
                </Nav>
            </Navbar>
        );
}