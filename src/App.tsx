import React, { Component } from 'react';
import LoadingScreen from './Components/LoadingScreen';
import SearchScreen from './Components/SearchScreen';

export interface State {
  location?: string,
  loading: boolean,
}
export default class App extends Component<any, State> {
  state = {
    location: undefined,
    loading: false,
  }

  locationSubmit = (location: string): void => {
    this.setState({location});
  }
  
  render(): JSX.Element {
    const { location, loading } = this.state;

    if(loading && location) return <LoadingScreen location={location}/>;
    return <SearchScreen onSubmit={this.locationSubmit}/>;
  }
}
