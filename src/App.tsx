import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes } from './routes'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}

export default App
