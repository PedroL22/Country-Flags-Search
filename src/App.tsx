import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes } from './routes'

import NavBar from './components/NavBar'

import Home from './pages/Home'
import Country from './pages/CountryDetails'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}

export default App
