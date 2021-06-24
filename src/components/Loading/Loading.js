import React, { Component } from 'react';
import '../../styles/loading.css';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="div-loading">
        <svg width="200" height="200" viewBox="0 0 40 60">
          <polygon
            className="triangle"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            points="16,1 32,32 1,32"
          />
          <text className="loading" x="0" y="45" fill="#fff">Loading...</text>
        </svg>
      </div>
    );
  }
}

export default Loading;
