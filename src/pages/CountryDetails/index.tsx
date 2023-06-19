import { Link, useParams } from 'react-router-dom'

import { IoIosArrowRoundBack } from 'react-icons/io'
import { useFetchCountryDetails } from '../../hooks/useQueryCountries'

export const CountryDetails = () => {
  const { name } = useParams()

  const { data, isLoading } = useFetchCountryDetails(String(name))

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
    <div className='mx-auto min-h-screen pt-20 tablet:max-w-screen-xl tablet:pt-28'>
      <Link to='/'>
        <button className='ml-4 flex rounded-md bg-white px-8 py-2 text-lg transition-all duration-75 ease-in dark:bg-gray-700 dark:text-white'>
          <IoIosArrowRoundBack size={30} />
          Back
        </button>
      </Link>

      {data && (
        <div className='my-4 max-w-screen-lg tablet:mx-auto tablet:my-16 tablet:flex tablet:justify-between'>
          <img
            src={data[0].flags?.png}
            alt={data[0].name?.common}
            className='mx-auto mb-5 flex h-40 w-64  rounded-lg object-cover tablet:mx-0 tablet:ml-4 tablet:h-80 tablet:w-[32rem]'
          />
          <div className='mx-auto my-auto max-w-[16rem] rounded-lg bg-white px-16 py-16 dark:bg-gray-700 tablet:max-w-md tablet:py-24'>
            <h1 className='-ml-5 mb-3 text-xl font-medium dark:text-white'>
              {data[0].name?.common}
            </h1>
            <div className='mx-auto -ml-5 flex'>
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
