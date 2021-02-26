import React, { Component } from 'react';

import Components from '../components/.list.js';

class landing extends Component {
  render() {
    return (
      <div className="landing">
        <div style={{ marginTop: '200px' }} />
        <div>
          <Components.CoinChart />
          <div>
            <div style={{ marginTop: '40px' }} />
            <Components.ShouldSell />
            <Components.ProfitPercentage />
          </div>
        </div>
        <header className="App-header">
          <p>Crypto' Tracker all rights reversed. Creator, Chase Simmons.</p>
        </header>
      </div>
    );
  }
}

export default landing;
