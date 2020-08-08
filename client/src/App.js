import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Display from './Display'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' component={Display} />

      </BrowserRouter>

    </div>
  )
}
export default App
