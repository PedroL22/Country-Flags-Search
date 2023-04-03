import { Link, useParams } from 'react-router-dom'

import { IoIosArrowRoundBack } from 'react-icons/io'
import { useFetchCountryDetails } from '../hooks/useQueryCountries'

export default function CountryDetails() {
  const { name } = useParams()

  const { data, isLoading } = useFetchCountryDetails(String(name))

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
    <div className='tablet:max-w-screen-xl mx-auto min-h-screen tablet:pt-28 pt-20'>
      <Link to='/'>
        <button className='flex px-8 py-2 ml-4 bg-white text-lg dark:text-white dark:bg-gray-700 rounded-md ease-in transition-all duration-75'>
          <IoIosArrowRoundBack size={30} />
          Back
        </button>
      </Link>

      {data && (
        <div className='tablet:flex tablet:mx-auto max-w-screen-lg tablet:justify-between tablet:my-16 my-4'>
          <img
            src={data[0].flags?.png}
            alt={data[0].name?.common}
            className='flex tablet:mx-0 mx-auto object-cover rounded-lg  tablet:h-80 tablet:w-[32rem] h-40 w-64 tablet:ml-4 mb-5'
          />
          <div className='bg-white rounded-lg  dark:bg-gray-700 my-auto mx-auto max-w-[16rem] tablet:max-w-md px-16 tablet:py-24 py-16'>
            <h1 className='dark:text-white font-medium text-xl mb-3 -ml-5'>
              {data[0].name?.common}
            </h1>
            <div className='flex mx-auto -ml-5'>
              <div className='mr-5'>
                <h2 className='text-gray-800 dark:text-gray-200'>
                  <span className='font-medium'>Population: </span>
                  {data[0].population?.toLocaleString('en-US')}
                </h2>
                <h2 className='text-gray-800 dark:text-gray-200'>
                  <span className='font-medium'>Region: </span>
                  {data[0].continents}
                </h2>
              </div>

              <div className=''>
                <h2 className='text-gray-800 dark:text-gray-200'>
                  <span className='font-medium'>Capital: </span>
                  {data[0].capital}
                </h2>
                <h2 className='text-gray-800 dark:text-gray-200'>
                  <span className='font-medium'>Timezone: </span>
                  {data[0].timezones}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
