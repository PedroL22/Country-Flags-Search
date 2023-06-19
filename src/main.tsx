import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeContextProvider from './hooks/useTheme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <div className='bg-gray-200 transition-all duration-75 ease-in dark:bg-gray-800'>
        <App />
      </div>
    </ThemeContextProvider>
  </React.StrictMode>
)
