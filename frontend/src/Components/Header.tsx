import React from "react";
import {Nav, Navbar, Image} from "react-bootstrap";


const Header = () => {
    return (
        <>
            <div className="header">
                <Image className="header-img"/>

                <div className="header-text">PANGEA</div>
            </div>


            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"><img id='headerLogo' src={require("./pin.jpg")} style={{width:50, marginTop: -7}}/></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Alle land</Nav.Link>
                    <Nav.Link href="#features">Besøkte land</Nav.Link>
                </Nav>
            </Navbar>
        </>
        );
};
export default Header;
