import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css'
import App from './App';

// utilisation de ReactDom pour afficher le composant App dans la div root
// avec document.querySelector

ReactDOM.render(<App />, document.querySelector('#root'));