import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import { Form, Button, Row, Col } from 'react-bootstrap'

const LoginForm = ({ baseUrl, issuer }) => {

  const { authService } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const oktaAuth = new OktaAuth({ url: baseUrl, issuer: issuer });
    oktaAuth.signIn({ username, password })
      .then(res => setSessionToken(res.sessionToken))
      .catch(err => console.log('Found an error', err));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (sessionToken) {
    authService.redirect({ sessionToken });
    return null;
  }

  return (

    <Row>
      <Col sm={3}>
        <Form onSubmit={handleSubmit}>

          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" value={username} onChange={handleUsernameChange} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
        </Button>

        </Form>
      </Col>
    </Row>
  );
};
export default LoginForm;