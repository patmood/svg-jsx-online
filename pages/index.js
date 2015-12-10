/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <textarea ref='sourceSVG'></textarea>
        <button onClick={this.processSVG.bind(this)}>Go</button>
      </div>
    );
  }

  processSVG () {
    console.log(this.refs.sourceSVG.value)
  }
}
