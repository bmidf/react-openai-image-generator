import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {Col, Row,Container, Button} from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      history.push('/');
    }
  }, [history]);

  const login = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Please enter a username and password.');
      return;
    }
    const user = {
      username,
      password,
    };
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/');
  };

  return (
    <Container style={{justifyContent: 'center', textAlign: 'center', fontFamily: 'boldRa',height:'800px', color: 'white'}}>
      <Row style={{height: '600px', alignItems: 'center', justifyContent: 'center'}}>
      <h3>Log In</h3>
      <form onSubmit={login}>
        {error && <p>{error}</p>}
        <Row style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
          <Col> </Col>
            <Col>
              <Row>
                <h4 htmlFor="username">Username:</h4>
              </Row>
              <Row style={{marginTop: '10px'}}>
              <Form.Control style={{backgroundColor: 'inherit', borderColor: 'blue', color: 'white'}}
                  type="text"
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Row>
            </Col>
          <Col></Col>
        </Row>
        <Row style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
          <Col></Col>
          <Col>
            <Row style={{marginTop: '30px'}}>
            <h4 htmlFor="password">Password:</h4>
            </Row>
            <Row style={{marginTop: '10px'}}>
            <Form.Control style={{backgroundColor: 'inherit', borderColor: 'blue', color: 'white'}}
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            </Row >
            <Row style={{marginTop: '50px'}}>
              <Button type="submit">Log In</Button>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </form>
      </Row>
    </Container>
  );
}
export default Login;