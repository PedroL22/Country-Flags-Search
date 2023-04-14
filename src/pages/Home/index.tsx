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
          className='flex mx-auto w-24 pt-[25vh]'
        />
      </div>
    )
  }

  return (
    <div className='xl:max-w-screen-xl mx-auto min-h-screen'>
      <div className='xl:ml-4 pt-20'>
        {
          <input
            type='text'
            placeholder='Search for a country...'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className='flex xl:mx-0 mx-auto py-4 pl-4 pr-36 rounded-lg outline-0 border border-gray-200 focus:border focus:border-gray-400 text-gray-500 dark:bg-gray-700 dark:border-gray-800 dark:focus:border-gray-500 dark:text-gray-300 dark:focus:text-gray-300 ease-in transition-all duration-75'
          />
        }
      </div>

      <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-4'>
        {countriesSearched.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  )
}
