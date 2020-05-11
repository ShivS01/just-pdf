import React from "react";
import { Link } from "react-router-dom";
import logo from "../just_pdf.png";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src={logo} width="60px" alt="Just PDF logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faHome} />
            Home
          </Nav.Link>
          <Nav.Link href="/books">
            <FontAwesomeIcon icon={faBook} />
            Books
          </Nav.Link>
          <Nav.Link href="/about">
            <FontAwesomeIcon icon={faInfoCircle} />
            About
          </Nav.Link>
          <Nav.Link href="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default NavBar;
