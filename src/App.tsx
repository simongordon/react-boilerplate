import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div className="App container">
                <Jumbotron>
                  <div className="App-header">
                    <h2>Welcome to React</h2>
                  </div>
                  <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to
                    reload.
                  </p>
                </Jumbotron>
              </div>
            )}
          />
          <Route
            path="/asdf"
            exact
            render={() => <div className="App container">asdf</div>}
          />
          <Route path="/abc" exact>
            abcdefg
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
