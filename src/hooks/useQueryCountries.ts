import { useQuery } from '@tanstack/react-query'

import { CountryEntity } from '../entities/CountryEntity'

import { requestAllCountries } from '../clients/CountryClient'

export const useFetchAllCountries = () => {
  return useQuery<CountryEntity[]>(['ALL-COUNTRIES'], requestAllCountries)
}
