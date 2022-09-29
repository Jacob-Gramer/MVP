/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function Login({ handleSearch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(true);
  const [login, setLogin] = useState(false);
  const [plat, setPlat] = useState('');

  const handleClose = () => {
    setSignup(false);
    setLogin(true);
  };

  const onUsername = (e) => setUsername(e.target.value);
  const onPassword = (e) => setPassword(e.target.value);

  const onSelect = (e) => {
    setPlat(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/signup', {
      username,
      password,
      platform: plat,
    })
      .then(() => handleSearch(username, plat))
      .then(() => setSignup(false))
      .catch((err) => console.error(err));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/login', {
      username,
      password,
    })
      .then((response) => {
        if (!response.data) {
          alert('Username or Password is Incorrect');
        } else {
          handleSearch(username, plat);
          setLogin(false);
        }
      })
      .catch(() => alert('Username or Password is Incorrect'));
  };

  if (signup) {
    return (
      <Modal
        show={signup}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="signup">
            <Form.Group>
              <FloatingLabel
                className="signup_labels"
                label="Username"
                onChange={(e) => onUsername(e)}
              >
                <Form.Control className="signup_input" type="text" />
              </FloatingLabel>
              <FloatingLabel
                className="signup_labels"
                label="Password"
                onChange={(e) => onPassword(e)}
              >
                <Form.Control className="signup_input" type="password" />
              </FloatingLabel>
              <ButtonGroup
                className="signup_input"
                id="button_group"
                type="checkbox"
              >
                <Button variant="light" value="PC" onClick={(e) => onSelect(e)}>PC</Button>
                <Button variant="light" value="X1" onClick={(e) => onSelect(e)}>Xbox</Button>
                <Button variant="light" value="PS4" onClick={(e) => onSelect(e)}>Playstation</Button>
              </ButtonGroup>
              <br />
              <Button
                className="signup_input"
                variant="primary"
                type="submit"
                onClick={handleSignup}
              >
                Signup
              </Button>
              <Button
                variant="link"
                onClick={handleClose}
              >
                Login
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <Modal
      show={login}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="signup">
          <Form.Group>
            <FloatingLabel
              className="signup_labels"
              label="Username"
              onChange={(e) => onUsername(e)}
            >
              <Form.Control className="signup_input" type="text" />
            </FloatingLabel>
            <FloatingLabel
              className="signup_labels"
              label="Password"
              onChange={(e) => onPassword(e)}
            >
              <Form.Control className="signup_input" type="password" />
            </FloatingLabel>
            <ButtonGroup
              className="signup_input"
              id="button_group"
              type="checkbox"
            >
              <Button variant="light" value="PC" onClick={(e) => onSelect(e)}>PC</Button>
              <Button variant="light" value="X1" onClick={(e) => onSelect(e)}>Xbox</Button>
              <Button variant="light" value="PS4" onClick={(e) => onSelect(e)}>Playstation</Button>
            </ButtonGroup>
            <br />
            <Button
              className="signup_input"
              variant="primary"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
