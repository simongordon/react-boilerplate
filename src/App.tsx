import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import CustomNavbar from './components/CustomNavbar';
import { Home } from './routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
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
