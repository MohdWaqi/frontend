import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScreenContext from './Context/ScreenContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ScreenContext>
    <App />
  </ScreenContext>
  </React.StrictMode>,
)
