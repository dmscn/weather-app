import React, { Component } from 'react'
import moment from 'moment';
import 'moment/min/locales';

import styles from './HeaderInfo.module.css';

moment.locale('pt-br');

export interface Props {
  location: string,
}

export default class HeaderInfo extends Component<Props> {
  render(): JSX.Element {
    const { location } = this.props;
    return (
      <section className={styles.Container}>
        <h1 className={styles.Header}>{location}</h1>
        <h4 className={styles.Subtitle}>{moment().format('LLLL')}</h4>
      </section>
    )
  }
}
