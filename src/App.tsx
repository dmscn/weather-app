import React, { Component } from 'react';
import axios from 'axios';

import LoadingScreen from './Components/LoadingScreen';
import SearchScreen from './Components/SearchScreen';
import ResultScreen from './Components/ResultScreen';

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const APPID = "638a471aca7521703a926ad9c4c08eec"

export interface State {
  location?: string,
  loading: boolean,
  weatherData?: any,
}
export default class App extends Component<any, State> {
  state = {
    location: undefined,
    loading: false,
    weatherData: undefined,
  }

  locationSubmit = async (location: string): Promise<any> => {
    await this.setState({location, loading: true});
    const result = (await axios.get(`${WEATHER_API_BASE_URL}?q=${location}&APPID=${APPID}`)).data;
    this.setState({ weatherData: result });
  }
  
  render(): JSX.Element {
    const { location, loading, weatherData } = this.state;

    if(weatherData) return <ResultScreen data={weatherData} /> 
    if(loading && location) return <LoadingScreen location={location}/>;
    return <SearchScreen onSubmit={this.locationSubmit}/>;
  }
}
