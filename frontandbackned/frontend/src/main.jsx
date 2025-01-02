import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './Context/Mynamecontaxt.jsx'

//browserrouter is file ..main jsx wrap karvana



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <BrowserRouter>
    <App>

    </App>
    </BrowserRouter>
    </Provider>
  </StrictMode>
)
