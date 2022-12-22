import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Profile() {
  const [profile, setProfile] = useState({});
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setProfile(user);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <Container style={{fontFamily: 'boldRa', height: '750px', color: 'white'}}>
      <Row>
        <Col xs={12} md={6}>
          <h3>USERNAME: {profile.username}</h3>
        </Col>
        <Col xs={12} md={6}>
          <Button variant="primary" onClick={logOut}>
            <h6>Log Out</h6>
          </Button>
        </Col>
      </Row>
      <Row >
        <Col xs={12} style={{marginTop: '60px'}}>
          <h2>Gallery</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
