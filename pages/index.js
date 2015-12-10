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
      <div className='container'>
        <h1>SVG to JSX Online Converter</h1>

        <textarea ref='sourceSVG' className='sm-col-12 border' style={{ minHeight: 200, fontFamily: 'monospace' }} defaultValue={defaultValue}></textarea>
        <div className='clearfix mt1 mb2'>
          <button onClick={this.processSVG.bind(this)} className='btn btn-primary right'>
            Create JSX
          </button>
        </div>
        <div>
          <pre className='border'>
            {this.state.jsx}
          </pre>
        </div>
        <p>This uses the brilliant <a href='https://www.npmjs.com/package/svg-to-jsx' target='_black'>svg-to-jsx</a> package.</p>
      </div>
    );
  }

  processSVG () {
    const sourceSVG = this.refs.sourceSVG.value
    svgtojsx(this.refs.sourceSVG.value)
      .then((jsx) => this.setState({ jsx }))
  }
}
