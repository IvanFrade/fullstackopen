import React, { useState, useEffect } from "react"
import axios from 'axios'
import Filter from "./components/Filter"

const Countries = ({ countries, filter }) => {
  const filteredCountries = countries
                            .filter(country => country.name.common.toLowerCase()
                            .includes(filter))
  
  if (filteredCountries.length === 0) 
    return (
      <div>No countries found</div>
    )

  if (filteredCountries.length === 1) 
    return (
      <Country country={filteredCountries[0]} />
    )

  if (filteredCountries.length < 11)
    return (
      <div>
        {filteredCountries.map(country => 
                                  <p key={country.cca2}>{country.name.common}</p>
        )}
      </div>
    )

  return <div>Too many matches, specify another filter</div>
}

const Country = ({ country }) => (
  <div>
    <h1>{country.name.common}</h1>
    <div>Capital {country.capital}</div>
    <div>Population {country.population}</div>
    <h2>Languages</h2>
    <ul>
      {Object.entries(country.languages)
             .map(([key, value]) => 
                <li key={key}>{value}</li>
      )}
    </ul>
    <img alt="country flag" src={country.flags.png} />
  </div>
)

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, [])

  const handleFilterChange = (event) => {setFilter(event.target.value.toLowerCase())}

  return (
    <div>
      <Filter filter={filter} handle={handleFilterChange} />
      <Countries countries={countries} filter={filter} />
    </div>
  )
}

export default App;
