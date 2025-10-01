import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("Service worker registered"))
    .catch((err) => console.error("Service worker error:", err));
}
