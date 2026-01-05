import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChangeLanguage from './context/ChangeLanguage.jsx'
import ChangeCart from './context/ChangeCart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChangeLanguage>
      <ChangeCart>
        <App />
      </ChangeCart>
    </ChangeLanguage>
  </StrictMode>,
)
