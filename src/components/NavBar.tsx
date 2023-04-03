import React from 'react'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from '../hooks/useTheme'

export default function NavBar() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='bg-white dark:bg-gray-700 shadow-sm fixed w-screen ease-in transition-all duration-75'>
      <nav className='h-16 xl:max-w-screen-xl flex mx-auto justify-between px-4 dark:text-white ease-in transition-all duration-75'>
        <a
          href='/'
          className='flex my-auto'
        >
          <h1 className='font-medium text-xl'>Country Search</h1>
        </a>
        <a
          href=''
          className='flex my-auto'
        >
          {theme === 'light' ? (
            <BsFillMoonFill
              onClick={() => setTheme('dark')}
              className='font-medium text-xl ease-in transition-all duration-75'
            />
          ) : (
            <BsSunFill
              onClick={() => setTheme('light')}
              size={25}
              className='font-medium text-xl ease-in transition-all duration-75'
            />
          )}
        </a>
      </nav>
    </div>
  )
}
