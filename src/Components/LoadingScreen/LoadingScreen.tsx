import React, { Component } from 'react'
import Input from '@material-ui/core/Input';

import styles from './LoadingScreen.module.css'

interface Props {
  location: string,
}
export default class LoadingScreen extends Component<Props> {
  render(): JSX.Element {
    return (
      <section className={styles.Conainer}>
        <Input
          disabled
          value={this.props.location}
          inputProps={{
            'aria-label': 'Location',
          }}
        />
      </section>
    )
  }
}
