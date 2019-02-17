import React, { Component } from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';

import styles from './TextField.module.css';

export default class UITextField extends Component<any> {
  render() {
    const { className = "", ...rest } = this.props;
    return (
      <div className={classNames(styles.Container, this.props.className)}>
        <TextField
          fullWidth
          {...rest}
        />
      </div>
    )
  }
}
