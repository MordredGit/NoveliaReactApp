import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
// import { Container } from "react-bootstrap";
import UserIcon from "./userIcon";

function NavBarItems({ to, icon, iconSize, text }) {
    return (
        <NavItem>
            <NavLink className="nav-link" to={to}>
                <FontAwesomeIcon icon={icon} size={iconSize} aria-hidden="true" /> {text}
            </NavLink>
        </NavItem>
    );
}

function Navigation() {
    const [collapse, setCollapse] = useState(false);

    const navbarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3em 10%",
        backgroundColor: "rgba(0,0,0,0)"
    };

    return (
        <Container fluid>
            <Navbar expand="md" style={navbarStyle}>
                <NavbarBrand className="mr-auto" href="/">
                    {/* <img src="" alt="" srcset=""/> */}
                    NOVELIA
                </NavbarBrand>
                <NavbarToggler onClick={() => setCollapse(prevState => !prevState)} />
                <Collapse isOpen={collapse} navbar>
                    <Nav navbar style={{position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
                        <NavBarItems to="/" icon={Icons.faHome} size="lg" text="Home" />
                        <NavBarItems to="/createBook" icon={Icons.faPenNib} size="lg" text="Create" />
                        <NavBarItems to="/browse" icon={Icons.faCompass} size="lg" text="Browse" />

                        {/* <NavItem className="ml-auto">
                            <UserIcon />
                        </NavItem> */}
                    </Nav>
                    <a className="ml-auto" href="/login"><button className="login">Login</button></a>
                    <UserIcon />
                </Collapse>
            </Navbar>

        </Container>


    );
}

export default Navigation;
