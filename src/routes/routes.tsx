import { BrowserRouter, Routes as ProjectRoutes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import CountryDetails from '../pages/CountryDetails'

import NavBar from '../components/NavBar'

export const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
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
