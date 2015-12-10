/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import svgtojsx from 'svg-to-jsx'

const defaultValue = '<svg version="1.1"><path id="myPath" style="font-family: Verdana; margin-bottom: 10px; -webkit-transition: all; ms-transition: all;"/></svg>'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = { jsx: '' }
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <textarea ref='sourceSVG' defaultValue={defaultValue}></textarea>
        <button onClick={this.processSVG.bind(this)}>Go</button>
        <pre>
          {this.state.jsx}
        </pre>
      </div>
    );
  }

  processSVG () {
    const sourceSVG = this.refs.sourceSVG.value
    svgtojsx(this.refs.sourceSVG.value)
      .then((jsx) => this.setState({ jsx }))
  }
}
