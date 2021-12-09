import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
// import './App.css';
let username;

function Login() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    username = response.accessToken;
    console.log(username)
  }

  return (
    <div class="container">
      <Card style={{ width: '600px' }}>
        <Card.Header>
          {!login &&
            <FacebookLogin
              appId="772535610372466"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={ responseFacebook }
              icon="fa-facebook" />
          }
          {login &&
            <Image src={picture} roundedCircle />
          }
        </Card.Header>
        {login &&
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.email}
            </Card.Text>
          </Card.Body>
        }
      </Card>
    </div>
  );
}
export default Login;