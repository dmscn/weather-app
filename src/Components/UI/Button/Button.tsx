import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

import styles from './Button.module.css';

export default class UIButton extends Component<any> {
  render() {
    const { className = "", children, ...rest } = this.props;
    return (
      <div className={classNames(styles.Container, this.props.className)}>
        <Button
          color="primary"
          variant="contained"
          {...rest}
        >
          {children}
        </Button>
      </div>
    )
  }
}
