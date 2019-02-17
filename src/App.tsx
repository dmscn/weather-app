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

  locationSubmit = async (location: string): Promise<any> => {
    await this.setState({location, loading: true});
    let result = await fetch(`${process.env.WEATHER_API_BASE_URL}?q=${location}`);
    result = await result.json();
    console.log(result);
  }
  
  render(): JSX.Element {
    const { location, loading } = this.state;

    if(loading && location) return <LoadingScreen location={location}/>;
    return <SearchScreen onSubmit={this.locationSubmit}/>;
  }
}
