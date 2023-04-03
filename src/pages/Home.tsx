import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useFetchAllCountries } from '../hooks/useQueryCountries'

export default function Home() {
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
          <Link
            to={`country/${country?.name?.common}`}
            key={country?.name?.common}
          >
            <div
              key={country?.fifa}
              className='bg-white dark:bg-gray-700 dark:text-white shadow-md m-4 pb-1 ease-in transition-all duration-75'
            >
              <img
                src={country?.flags?.png}
                alt={country?.name?.common}
                className='flex mx-auto object-cover h-[13rem] w-full'
              />

              <div className='m-4'>
                <p className='font-medium text-lg mb-2'>
                  {country?.name?.common}
                </p>
                <div className='flex text-gray-700 dark:text-white ease-in transition-all duration-75'>
                  <p className='font-medium mr-1'>Population:</p>
                  <p className='text-gray-800 dark:text-gray-200'>
                    {country?.population?.toLocaleString('en-US')}
                  </p>
                </div>
                <div className='flex text-gray-700 dark:text-white ease-in transition-all duration-75'>
                  <p className='font-medium mr-1'>Region:</p>
                  <p className='text-gray-800 dark:text-gray-200'>
                    {country?.continents}
                  </p>
                </div>
                <div className='flex text-gray-700 dark:text-white ease-in transition-all duration-75'>
                  <p className='font-medium mr-1'>Capital:</p>
                  <p className='text-gray-800 dark:text-gray-200'>
                    {country?.capital}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
