import React from "react";
import "../HomeScreen/HomeScreen.css";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <Link to={"/ContactList"}>
          <div className="cardView">Contact List</div>
        </Link>
        <Link to={"/AddContact"}>
          <div className="cardView">Add Contacts</div>
        </Link>
      </div>
    </div>
  );
}
