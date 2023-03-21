import React, { useState } from "react";
import { Button, Container, Modal, Navbar } from "react-bootstrap";
import backgroundImage from "../../assets/partyPeople.jpg";
import logo from "../../assets/tour-image.png"
import "./styles.css"

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  // function to handle modal show/hide on button click
  const handleShowModal = () => setShowModal(!showModal);

  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "50vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }} 
     className="navbar-header"
    >
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} width="36px" height="36px" className="logo"></img>
        </div>
        <Navbar>
          <ul>
            <a href="#">Attractions</a>
            <a href="#">Events</a>
            <a href="#">Architecture</a>
            <a href="#">History</a>
          </ul>
        </Navbar>
      </div>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
            marginBottom: "2rem", // add margin bottom to div container
          }}
        >
          <div className="h1-container">
          <h1>
            Party People
          </h1>
          </div>
          <h6 className="header-text">The Best Place to look where to party !</h6>
          <Button variant="primary" onClick={handleShowModal} style={{ marginTop: "1rem" }}>
            Learn More
          </Button>
        </div>

        <Modal show={showModal} onHide={handleShowModal}>
          <Modal.Header>
            <Modal.Title>Party People</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           Best place to find out where your favorite artists are playing !
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShowModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </header>
  );
};

export default Header;
