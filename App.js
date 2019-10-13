import React, { Component, Fragment } from 'react';
import { StatusBar, View } from 'react-native';
import Home from './src/screens/screen 1/index'
import TaskDisplay from './src/screens/screen 2/index';
// import AppContainer from './src/index';

class App extends Component {
  render() {
    return (
      <Home />
      // <TaskDisplay />
        // <AppContainer />
    );
  }
}

export default App;
