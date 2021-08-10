import React from "react";
import { GoogleLogin } from "react-google-login";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import GoodIcon from "../../images/goodbye.png";

export default function Auth(props) {
  const responseGoogle = (response) => {
    let myData = JSON.stringify(response);

    localStorage.setItem("mydata", myData);
    console.log(myData, "json");
  };

  return (
    <Container>
      <section className="auth-section">
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <div className="card-header">
              <img src={GoodIcon} alt="GoodIcon" className="goodIcon" />
              <Card.Title> Webex Tasck</Card.Title>
            </div>
            <Card.Subtitle className="mb-2 text-muted">
              Sign up to share your presenntation on Slider App. We can't wait
              for you to join!
            </Card.Subtitle>
            <GoogleLogin
              clientId={
                "88231172-kl53hmg4pvuujuc7cslcsjplmmel4u48.apps.googleusercontent.com"
              }
              buttonText={
                <Route
                  render={({ history }) => (
                    <button
                      className="google-btn"
                      type="button"
                      onClick={() => {
                        history.push("/account");
                      }}
                    >
                      Sign in width Google
                    </button>
                  )}
                />
              }
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
            <small>
              Preview existing presentation? Click here to enter code
            </small>
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
}
