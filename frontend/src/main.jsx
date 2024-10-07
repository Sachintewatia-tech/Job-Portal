import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/sonner.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster/>
  </StrictMode>
  </BrowserRouter>
)
