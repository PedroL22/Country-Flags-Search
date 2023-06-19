import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'

import { useTheme } from '../../hooks/useTheme'

export const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='fixed w-screen bg-white shadow-sm transition-all duration-75 ease-in dark:bg-gray-700'>
      <nav className='mx-auto flex h-16 justify-between px-4 transition-all duration-75 ease-in dark:text-white xl:max-w-screen-xl'>
        <a
          href='/'
          className='my-auto flex'
        >
          <h1 className='text-xl font-medium'>Country Search</h1>
        </a>
        <div className='my-auto flex cursor-pointer'>
          {theme === 'light' ? (
            <BsFillMoonFill
              onClick={() => setTheme('dark')}
              className='text-xl font-medium transition-all duration-75 ease-in'
            />
          ) : (
            <BsSunFill
              onClick={() => setTheme('light')}
              size={25}
              className='text-xl font-medium transition-all duration-75 ease-in'
            />
          )}
        </div>
      </nav>
    </div>
  )
}
