import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setApi(response.data);
    });
  }, []);

  return (
    <div className="xl:max-w-screen-xl mx-auto">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-20">
        {api.map((country) => (
          <div key={country.name?.official} className="bg-white shadow-md m-4">
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="flex mx-auto object-cover h-[13rem] w-full"
            />
            <div className="m-4">
              <p className="font-medium text-lg mb-2">{country.name.common}</p>
              <div className="flex text-gray-700">
                <p className="font-medium mr-1">Population:</p>
                <p className="">{country.population.toLocaleString('en-US')}</p>
              </div>
              <div className="flex text-gray-700">
                <p className="font-medium mr-1">Region:</p>
                <p className="">{country.continents}</p>
              </div>
              <div className="flex text-gray-700">
                <p className="font-medium mr-1">Capital:</p>
                <p className="">{country.capital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
