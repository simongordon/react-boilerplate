import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron } from 'react-bootstrap';


class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Jumbotron>

          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
