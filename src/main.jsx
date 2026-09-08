import { StrictMode } from 'react' //identify potential problems
import { createRoot } from 'react-dom/client' //create a React root and render your React application into an HTML element.
import { BrowserRouter } from 'react-router-dom' 
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
