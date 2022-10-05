import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Country() {
  const { cca2 } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha/${cca2}`).then((response) => {
      setCountry(response.data);
    });
  }, []);

  return <div>{country && <h1 className="pt-28 text-black">{country[0].name?.common}</h1>}</div>;
}
