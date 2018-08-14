import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Main from './src/containers/Main';
import AppReducer from './src/reducers/AppReducer';

const store = createStore(AppReducer, applyMiddleware(thunk));

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App;
