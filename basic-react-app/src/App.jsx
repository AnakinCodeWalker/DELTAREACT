/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/

import './App.css';
import Title from './Title';
import {Button,Button2} from './Button';
/*
function Title() {
  return (
    <div>
      <h1>I am Title</h1>
      <h1>I am Title</h1>
      <p>inside Title</p>
    </div>
  );
}*/


function App() {

  /*const [count, setCount] = useState(0)*/

  return (
    <div> 
    <Title></Title>
    <Title/>
    <Button2/>
    <Button/>
    </div>
  );
  /*(
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
