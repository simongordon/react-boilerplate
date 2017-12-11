import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';

const Home = () => (
  <div>
    <CustomNavbar />
    <div className="container">
      <Jumbotron>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <Link to="/asdf">Other page</Link>
        </p>
      </Jumbotron>
    </div>
  </div>
);

export default Home;
