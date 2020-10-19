import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import pangea from "./pangea.png"

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={pangea}/>
                <div className="header-text">PANGEA</div>
            </div>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><img id='headerLogo' alt="pin" src={require("./pin.png")} style={{width:25}}/></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="alle">Alle land</Nav.Link>
                    <Nav.Link href="mine">Besøkte land</Nav.Link>
                </Nav>
                <Nav className="justify-content-end" >
                    <Nav.Link href="registrer">Registrer</Nav.Link>
                    <Nav.Link href="login">Logg inn</Nav.Link>
                </Nav>
            </Navbar>
        </>
        );
};
export default Header;
