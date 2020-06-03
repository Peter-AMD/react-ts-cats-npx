import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/homePage/HomePage';
import { CatDetails } from './components/catDetails/CatDetails';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:catId" component={CatDetails} />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
