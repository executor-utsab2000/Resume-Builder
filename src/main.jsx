import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './CSS_SCSS/main.scss'
import UserContextProvider from './Context/UserContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </UserContextProvider>
)
