import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './LoadingScreen.module.css'

export interface Props {
  location: string,
}
export default class LoadingScreen extends Component<Props> {
  render(): JSX.Element {
    return (
      <section className={styles.Container}>
        <Input
          disabled
          className={styles.Input}
          value={this.props.location}
          inputProps={{
            'aria-label': 'Location',
          }}
        />
        <CircularProgress />
      </section>
    )
  }
}
