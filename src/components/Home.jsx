import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [api, setApi] = useState(['https://restcountries.com/v3.1/all']);

  const [query, setQuery] = useState();

  const showData = useEffect(() => {
    const fetchData = () => {
      axios.get(api).then((res) => {
        setApi(res.data);
      });
    };
    fetchData();
  });

  const reset = () => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setApi(res.data);
      console.log(api);
    });
  };

  const search = () => {
    if (query.length === 0) {
      reset();
    } else {
      setApi([`https://restcountries.com/v3.1/name/${query}`]);
      console.log(api);
    }
  };

  return (
    <div className="xl:max-w-screen-xl mx-auto min-h-screen">
      <div className="xl:ml-4 pt-20">
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          className="flex xl:mx-0 mx-auto py-4 pl-4 pr-36 rounded-lg outline-0 border border-gray-200 focus:border focus:border-gray-400 text-gray-500 dark:bg-gray-700 dark:border-gray-800 dark:focus:border-gray-500 dark:text-gray-300 dark:focus:text-gray-300 ease-in transition-all duration-75"
        />
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-4">
        {api.map((country) => (
          <div
            key={country?.fifa}
            className="bg-white dark:bg-gray-700 dark:text-white shadow-md m-4 ease-in transition-all duration-75"
          >
            <img
              src={country?.flags?.png}
              alt={country?.name?.common}
              className="flex mx-auto object-cover h-[13rem] w-full"
            />
            <div className="m-4">
              <p className="font-medium text-lg mb-2">{country?.name?.common}</p>
              <div className="flex text-gray-700 dark:text-white ease-in transition-all duration-75">
                <p className="font-medium mr-1">Population:</p>
                <p className="">{country?.population?.toLocaleString('en-US')}</p>
              </div>
              <div className="flex text-gray-700 dark:text-white ease-in transition-all duration-75">
                <p className="font-medium mr-1">Region:</p>
                <p className="">{country?.continents}</p>
              </div>
              <div className="flex text-gray-700 dark:text-white ease-in transition-all duration-75">
                <p className="font-medium mr-1">Capital:</p>
                <p className="">{country?.capital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
