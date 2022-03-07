import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const  REACT_APP_CLIENT_ID = "";
  const  REACT_APP_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const  REACT_APP_REDIRECT_URL = "http://localhost:3001/";
  const  REACT_APP_RESPONSE_TYPE = "token";

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_ENDPOINT}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=${REACT_APP_RESPONSE_TYPE}`
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card className="w-50">
        <Card.Body>
          <Card.Title>Please login</Card.Title>
          <Card.Text style={{ fontSize: "1rem" }}>
            To use our application, you need to login with your Spotify account.
          </Card.Text>
          <Button variant="success" onClick={handleLogin}>
            Login to Spotify <FaSignInAlt />
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
