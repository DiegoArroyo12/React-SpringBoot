import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const h1 = createElement('div', null, createElement('ul', null, createElement('li', null, 'Hola Mundo')));
const hello = <div><ul><li>Hola Mundo</li></ul></div>
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  h1
)
