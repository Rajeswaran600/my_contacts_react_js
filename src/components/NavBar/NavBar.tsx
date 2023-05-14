import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ width: "100%" }}
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          style={{ fontSize: 20, fontFamily: "Roboto Condensed" }}
        >
          My Contacts
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/"}>
              <Nav.Link href="#action1">Home</Nav.Link>
            </Link>
            <Link to={"/ContactList"}>
              <Nav.Link href="#action2">Contact List</Nav.Link>
            </Link>
            <NavDropdown title="Contact Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Whatsapp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Facebook</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Link to={"/AddContact"}>
              <Button variant="outline-success">Add Contacts</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
