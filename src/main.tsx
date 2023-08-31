import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from 'store/store'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// handle theme in local storage
if (localStorage.getItem('theme')) {
  document.documentElement.className = localStorage.getItem('theme') as string
}
