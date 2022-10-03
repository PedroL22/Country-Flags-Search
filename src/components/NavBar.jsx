import React from 'react';

export default function NavBar() {
  return (
    <div className="bg-white shadow-sm fixed w-screen">
      <nav className="h-16 xl:max-w-screen-xl flex mx-auto justify-between px-4">
        <a href="/" className="flex my-auto">
          <h1 className="font-medium text-xl">Country Search</h1>
        </a>
        <a href="" className="flex my-auto">
          <h1 className="font-medium text-xl">Dark Mode</h1>
        </a>
      </nav>
    </div>
  );
}
