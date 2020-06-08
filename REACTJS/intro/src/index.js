import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intec from './hello';

let number = 10;
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let jsonObj = [
  {
    id: 1,
    title: 'Test1',
    body: 'This is body1'
  },
  {
    id: 2,
    title: 'Test2',
    body: 'This is body2'
  },
  {
    id: 3,
    title: 'Test3',
    body: 'This is body3'
  },
  {
    id: 4,
    title: 'Test4',
    body: 'This is body4'
  }
]
ReactDOM.render(
  <div>
    <Intec title='This is cool project'
    shownumber={number}
    numbers={myArray}
    posts={jsonObj} />
  </div>,
  document.getElementById('root')
);
