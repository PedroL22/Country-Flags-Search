import { BrowserRouter, Routes as ProjectRoutes, Route } from 'react-router-dom'

import { Navbar } from '../components/Navbar'

import { Home } from '../pages/Home'
import { CountryDetails } from '../pages/CountryDetails'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ProjectRoutes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='country/:name'
          element={<CountryDetails />}
        />
      </ProjectRoutes>
    </BrowserRouter>
  )
}
