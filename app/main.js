import React from 'react';
import QuestionApp from './js/QuestionApp.js';
import './style.css';

main();

function main() {
  var QuestionApps =  React.render(<QuestionApp />, document.getElementById('app'));
}