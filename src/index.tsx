import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'

const isRender =
  document.getElementById('root')?.childElementCount === 0 ?? false

const render = isRender ? ReactDOM.render : ReactDOM.hydrate
console.log(`render: ${isRender ? 'ReactDOM.render' : 'ReactDOM.hydrate'}`)

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
)
