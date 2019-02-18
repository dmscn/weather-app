import React, { Component } from 'react';
import moment from 'moment';

import styles from './ResultScreen.module.css';
import HeaderInfo from './HeaderInfo';

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
        <span> (icon) </span>
      </main>
    )
  }
}
