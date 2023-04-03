import axios from 'axios'
import { CountryEntity } from '../entities/CountryEntity'

export const requestAllCountries = async () => {
  const { data } = await axios.request<CountryEntity[]>({
    baseURL: 'https://restcountries.com/v3.1/all',
    method: 'GET',
  })

  return data
}
