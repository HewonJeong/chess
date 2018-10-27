import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { observe } from './Game';
import Board from './components/Board';

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('root') as HTMLElement
  )
);



registerServiceWorker();
