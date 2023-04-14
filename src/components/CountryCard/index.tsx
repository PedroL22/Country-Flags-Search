import { Link } from 'react-router-dom'
import { SpecificCountry } from '../../entities/CountryEntity'

type CountryCardProps = {
  country: SpecificCountry
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
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
          <p className='font-medium text-lg mb-2'>{country?.name?.common}</p>
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
  )
}
