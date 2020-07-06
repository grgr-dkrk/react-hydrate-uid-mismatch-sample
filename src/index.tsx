import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'

const appRoot = document.getElementById('app')!
const isConcurrent = process.env.RENDER_MODE === 'concurrent'
const isRender =
  document.getElementById('root')?.childElementCount === 0 ?? false
const renderWrapper = isRender ? ReactDOM.render : ReactDOM.hydrate

console.log(`mode: ${isConcurrent ? 'concurrent' : 'legacy'}`)
console.log(`render: ${isRender ? 'ReactDOM.render' : 'ReactDOM.hydrate'}`)

if (isConcurrent) {
  // @ts-ignore - experimental
  ReactDOM.unstable_createRoot(appRoot, {
    hydrate: true,
  }).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
} else {
  renderWrapper(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    appRoot,
  )
}
