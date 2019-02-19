import React, { Component } from 'react'
import moment from 'moment';

import styles from './OtherInfo.module.css';

export interface Props {
  humidity: number,
  sunrise: number,
  sunset: number,
}

export default class OtherInfo extends Component<Props> {

  formatTime = (time: number): string => {
    return moment(new Date(time * 1000)).format('LT');
  }
  
  render(): JSX.Element {
    const { humidity, sunrise, sunset } = this.props;

    return (
      <section className={styles.Container}>
        <h4>Umidade: {humidity}%</h4>
        <h4>Nascer do Sol: {this.formatTime(sunrise)}</h4>
        <h4>Pôr do Sol: {this.formatTime(sunset)}</h4>
      </section>
    )
  }
}
