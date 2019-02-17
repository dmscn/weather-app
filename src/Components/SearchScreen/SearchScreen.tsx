import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './SearchScreen.module.css';

export interface Props {
  onSubmit: (location: string) => void;
}

export interface State {
  text: string,
}

export default class SearchScreen extends Component<Props, State> {
  state = {
    text: '',
  }

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ text: event.target.value });
  }

  onSubmit = (): void => {
    this.props.onSubmit(this.state.text);
  }

  render(): JSX.Element {
    const { text } = this.state;
    return (
      <main className={styles.Container}>
        <TextField
          id="LocationInput"
          label="Location"
          placeholder="Location"
          value={text}
          onChange={this.handleOnChange}
          inputProps={{
            'aria-label': 'Search Box',
          }}
        />
        <Button
          variant="raised"
          onClick={this.onSubmit}
        >
          Search
        </Button>
      </main>
    )
  }
}
