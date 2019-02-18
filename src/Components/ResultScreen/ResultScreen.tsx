import React, { Component } from 'react';
import moment from 'moment';

import styles from './ResultScreen.module.css';
import HeaderInfo from './HeaderInfo';
import MainInfo from './MainInfo';

moment.locale('pt-BR');
export interface Props {
  data: any,
}

export default class ResultScreen extends Component<Props> {
  render(): JSX.Element {
    const { data } = this.props;
    return (
      <main className={styles.Container}>
        <HeaderInfo location={data.name} />
        <MainInfo 
          weatherId={data.weather[0].id}
          weather={data.weather[0].main}
          temp={data.main.temp}
          tempMax={data.main.temp_max}
          tempMin={data.main.temp_min}
        />
      </main>
    )
  }
}
