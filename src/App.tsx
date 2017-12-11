import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import CustomNavbar from './components/CustomNavbar';

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
                  <CustomNavbar />
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
                  <CustomNavbar />
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
