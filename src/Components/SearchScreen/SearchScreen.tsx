import React, { Component } from 'react';
import TextField from '../UI/TextField';
import Button from '../UI/Button';

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
        <form onSubmit={this.onSubmit}>
          <TextField
            autoFocus
            className={styles.TextField}
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
            type="submit"
            onClick={this.onSubmit}
          >
            Search
          </Button>
        </form>
      </main>
    )
  }
}
