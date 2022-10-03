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
    <div>
      <div className="grid grid-flow-row grid-cols-5 ">
        {api.map((country) => (
          <div key={country.name?.official} className="">
            <img src={country.flags.png} alt={country.name.common} />
            <p className="bg-gray-500 m-10">{country?.name?.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
