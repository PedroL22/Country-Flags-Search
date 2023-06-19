import { Link } from 'react-router-dom'
import { SpecificCountry } from '../../entities/CountryEntity'

type CountryCardProps = {
  country: SpecificCountry
  key?: string
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link
      to={`country/${country?.name?.common}`}
      key={country?.name?.common}
    >
      <div
        key={country?.fifa}
        className='m-4 bg-white pb-1 shadow-md transition-all duration-75 ease-in dark:bg-gray-700 dark:text-white'
      >
        <img
          src={country?.flags?.png}
          alt={country?.name?.common}
          className='mx-auto flex h-[13rem] w-full object-cover'
        />

        <div className='m-4'>
          <p className='mb-2 text-lg font-medium'>{country?.name?.common}</p>
          <div className='flex text-gray-700 transition-all duration-75 ease-in dark:text-white'>
            <p className='mr-1 font-medium'>Population:</p>
            <p className='text-gray-800 dark:text-gray-200'>
              {country?.population?.toLocaleString('en-US')}
            </p>
          </div>
          <div className='flex text-gray-700 transition-all duration-75 ease-in dark:text-white'>
            <p className='mr-1 font-medium'>Region:</p>
            <p className='text-gray-800 dark:text-gray-200'>
              {country?.continents}
            </p>
          </div>
          <div className='flex text-gray-700 transition-all duration-75 ease-in dark:text-white'>
            <p className='mr-1 font-medium'>Capital:</p>
            <p className='text-gray-800 dark:text-gray-200'>
              {country?.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
