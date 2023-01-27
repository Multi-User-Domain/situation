import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/home";
import Index from './pages/index';

ReactDOM.render(<Index><Home></Home></Index>, document.querySelector('#root'));
