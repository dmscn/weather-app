import React, { Component } from 'react'

export default class LoadingLogo extends Component {
  render(): JSX.Element {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    )
  }
}
