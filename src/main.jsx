import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './CSS_SCSS/main.scss'


createRoot(document.getElementById('root')).render(

    <StrictMode>
      <App />
    </StrictMode>

)
