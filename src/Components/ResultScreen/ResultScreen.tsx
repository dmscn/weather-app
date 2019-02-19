import React, { Component } from 'react';
import moment from 'moment';

import styles from './ResultScreen.module.css';
import HeaderInfo from './HeaderInfo';
import MainInfo from './MainInfo';
import OtherInfo from './OtherInfo';

moment.locale('pt-BR');
export interface Props {
  data: any,
}

export default class ResultScreen extends Component<Props> {
  render(): JSX.Element {
    const { data } = this.props;
    return (
      <main className={styles.Container}>
        <HeaderInfo location={{ name: data.name, country: data.city.country }} />
        <MainInfo 
          weatherId={data.weather[0].id}
          weather={data.list[0].weather[0].description}
          temp={data.main.temp}
          tempMax={data.main.temp_max}
          tempMin={data.main.temp_min}
        />
        <hr />
        <OtherInfo humidity={data.main.humidity} sunrise={data.sys.sunrise} sunset={data.sys.sunset} />
      </main>
    )
  }
}
