import React, { Component } from 'react';
import LoadingScreen from './Components/LoadingScreen';

class App extends Component {
  render(): JSX.Element {
    return (
      <main>
        <LoadingScreen location="Rio de Janeiro" />
      </main>
    );
  }
}

export default App;
