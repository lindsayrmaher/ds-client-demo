import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import ContentList from './ContentList'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={ContentList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
