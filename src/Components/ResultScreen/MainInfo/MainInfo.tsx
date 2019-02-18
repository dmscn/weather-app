import React, { Component } from 'react'

import '../../../static/weather-icons/css/weather-icons.min.css';
import styles from './MainInfo.module.css';

export interface Props {
  weatherId: number,
  weather: string,
  temp: number,
  tempMin: number,
  tempMax: number,
}

export default class MainInfo extends Component<Props> {

  setIcon = (): JSX.Element => {
    const { weatherId } = this.props;
    const icon: string = `wi wi-owm-${weatherId}`;
    return <i className={icon} style={{fontSize: '8em'}}></i>
  }

  render(): JSX.Element {
    const { weather, temp, tempMin, tempMax } = this.props;
    return (
      <section className={styles.Container}>
        <h4>{weather}</h4>
        {this.setIcon()}
        <h4>{tempMin}</h4>
        <h4>{temp}</h4>
        <h4>{tempMax}</h4>
      </section>
    )
  }
}
