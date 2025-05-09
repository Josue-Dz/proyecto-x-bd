import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/store'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>

      <GoogleOAuthProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </GoogleOAuthProvider>


    </BrowserRouter>
  </StrictMode>,
)
