import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectClass } from "../../redux/createSlice/presentationSlice";
import GoodIcon from "../../images/goodbye.png";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

import { Route } from "react-router-dom";

import Presentation from "../Presentation/Presentation";

export default function Account() {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("mydata"))
  );
  const hideAccount = useSelector(selectClass);
  return (
    <div className={`account `}>
      <div className={`hide-div ${hideAccount ? "opacityAccount" : ""}`}></div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <div className="card-header">
            <img src={GoodIcon} alt="GoodIcon" className="goodIcon" />
            <Navbar.Brand>Webex Tasck</Navbar.Brand>
          </div>
          <strong className="email">{loggedIn.profileObj.email}</strong>
          <div className="personal-profile">
            <img src={loggedIn.profileObj.imageUrl} className="profile-img" />
            <Navbar.Toggle />

            <NavDropdown
              title={loggedIn.profileObj.name}
              id="collasible-nav-dropdown"
            >
              <Route
                render={({ history }) => (
                  <button
                    className="google-btn"
                    type="button"
                    onClick={() => {
                      history.push("/");
                      // localStorage.removeItem("mydata", null);
                    }}
                  >
                    Log Out
                  </button>
                )}
              />
            </NavDropdown>
          </div>
        </Container>
      </Navbar>

      <Presentation />
    </div>
  );
}
