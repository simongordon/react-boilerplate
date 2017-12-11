import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Home, Info } from './routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/info" exact component={Info} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
