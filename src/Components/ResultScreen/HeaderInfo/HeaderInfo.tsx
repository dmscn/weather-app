import React, { Component } from 'react'
import moment from 'moment';

import styles from './HeaderInfo.module.css';

moment().locale('pt-BR');

export interface Props {
  location: string,
}

export default class HeaderInfo extends Component<Props> {
  render(): JSX.Element {
    const { location } = this.props;
    return (
      <section className={styles.Container}>
        <h1>{location}</h1>
        <h4>{moment().format('LLLL')}</h4>
      </section>
    )
  }
}
