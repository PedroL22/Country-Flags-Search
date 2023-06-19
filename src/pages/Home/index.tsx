import { useState } from 'react'

import { useFetchAllCountries } from '../../hooks/useQueryCountries'

import { CountryCard } from '../../components/CountryCard'

export const Home = () => {
  const { data, isLoading } = useFetchAllCountries()
  const [query, setQuery] = useState('')

  const countriesSearched = data
    ? data.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      )
    : []

  if (isLoading) {
    return (
      <div className='h-screen'>
        <img
          src='/loading-buffering.gif'
          alt='loading'
          className='mx-auto flex w-24 pt-[25vh]'
        />
      </div>
    )
  }

  return (
    <div className='mx-auto min-h-screen xl:max-w-screen-xl'>
      <div className='pt-20 xl:ml-4'>
        {
          <input
            type='text'
            placeholder='Search for a country...'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className='mx-auto flex rounded-lg border border-gray-200 py-4 pl-4 pr-36 text-gray-500 outline-0 transition-all duration-75 ease-in focus:border focus:border-gray-400 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-gray-500 dark:focus:text-gray-300 xl:mx-0'
          />
        }
      </div>

      <div className='grid grid-cols-1 pt-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {countriesSearched.map((country) => (
          <CountryCard
            country={country}
            key={country.name.common}
          />
        ))}
      </div>
    </div>
  )
}
