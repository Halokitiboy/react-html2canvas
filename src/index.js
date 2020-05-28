import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <header className="title">都怪ps技术不行只能搞搞小聪明-图片生成工具</header>
    <App />
  </Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
