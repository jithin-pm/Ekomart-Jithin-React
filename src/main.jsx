import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Tailwind CSS
import './index.css'

// Legacy CSS (order matters)
import './assets/css/bootstrap.min.css'
import './assets/css/plugins.css'
import './assets/css/style.css'
import './assets/css/overrides.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
