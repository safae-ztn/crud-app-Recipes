import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';

export default function Header() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">CRUD App - Recettes</Navbar.Brand>
                <Nav className="mr-auto"> 
                </Nav>
            </Navbar>
        );
}