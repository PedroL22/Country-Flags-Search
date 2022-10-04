import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-700 shadow-sm fixed w-screen">
      <nav className="h-16 xl:max-w-screen-xl flex mx-auto justify-between px-4 dark:text-white">
        <a href="/" className="flex my-auto">
          <h1 className="font-medium text-xl">Country Search</h1>
        </a>
        <a href="" className="flex my-auto">
          {theme === 'light' ? (
            <h1 onClick={() => setTheme('dark')} className="font-medium text-xl">
              Dark Mode
            </h1>
          ) : (
            <h1 onClick={() => setTheme('light')} className="font-medium text-xl">
              Light Mode
            </h1>
          )}
        </a>
      </nav>
    </div>
  );
}
