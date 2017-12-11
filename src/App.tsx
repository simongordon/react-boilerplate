import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Jumbotron,
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
  NavItem
} from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

interface SiteNavProps {}
const SiteNav = (props: SiteNavProps) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/" exact>
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/asdf">
          <NavItem eventKey={1}>Asdf</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <SiteNav />
                  <div className="container">
                    <Jumbotron>
                      <div className="App-header">
                        <h2>Welcome to React</h2>
                      </div>
                      <p className="App-intro">
                        To get started, edit <code>src/App.tsx</code> and save
                        to reload.
                        <Link to="/asdf">Other page</Link>
                      </p>
                    </Jumbotron>
                  </div>
                </div>
              )}
            />
            <Route
              path="/asdf"
              exact
              render={() => (
                <div>
                  <SiteNav />
                  <div className="App container">asdf</div>
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
