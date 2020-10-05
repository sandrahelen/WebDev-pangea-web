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
                <Navbar.Brand><img id='headerLogo' alt="pin" src={require("./pin.png")} style={{width:25}}/></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="alle">Alle land</Nav.Link>
                    <Nav.Link href="mine">Besøkte land</Nav.Link>
                </Nav>
            </Navbar>
        </>
        );
};
export default Header;
