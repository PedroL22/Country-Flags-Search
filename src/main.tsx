import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeContextProvider from './hooks/useTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <div className='bg-gray-200 dark:bg-gray-800 ease-in transition-all duration-75'>
        <App />
      </div>
    </ThemeContextProvider>
  </React.StrictMode>
)
