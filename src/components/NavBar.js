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

const NavBar = ({ updateSearch, handleSearch }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width="80" alt="Just PDF logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon={faHome} />
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/books">
            <FontAwesomeIcon icon={faBook} />
            Books
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            <FontAwesomeIcon icon={faInfoCircle} />
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSearch}>
          <FormControl
            onChange={updateSearch}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button type="submit" variant="outline-info">
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  );
};

export default NavBar;
