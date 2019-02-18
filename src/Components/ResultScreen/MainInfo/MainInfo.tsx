import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

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
    return <i className={classNames(icon, styles.Icon)}></i>
  }

  formatTemperature = (temp: number): string => {
    return temp.toFixed(0).toString().substr(0,2) + 'ºC';
  }

  render(): JSX.Element {
    const { weather, temp, tempMin, tempMax } = this.props;
    return (
      <section className={styles.Container}>
        <div className={styles.weatherBox}>
          Mínima
          <h4 className={styles.Temperature}>{this.formatTemperature(tempMin)}</h4>
        </div>

        <div className={styles.weatherBox}>
          {this.setIcon()}
          <h4 className={classNames(styles.Temperature, styles.MainTemperature)}>{this.formatTemperature(temp)}</h4>        
          <h4 className={styles.WeatherTitle}>{_.startCase(_.toLower(weather))}</h4>
        </div>

        <div className={styles.weatherBox}>
          Máxima
          <h4 className={styles.Temperature}>{this.formatTemperature(tempMax)}</h4>
        </div>
      </section>
    )
  }
}
