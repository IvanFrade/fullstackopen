// i mean this looks terrible but it works so... cant be that bad right?

import React, { useState, useEffect } from "react"
import axios from 'axios'
import Filter from "./components/Filter"
import Button from "./components/Button"

const Countries = ({ countries, setFilter, filter }) => {
  let filteredCountries = countries
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
        {filteredCountries.map(country => (
                                  <p key={country.cca2}>
                                    {country.name.common} <Button text="show" onClick={() => setFilter(country.name.common.toLowerCase())} />
                                  </p>
        ))}
      </div>
    )

  return <div>Too many matches, specify another filter</div>
}

const Country = ({ country }) => (
  <div>
    <h1>{country.name.common}</h1>
    <div>Capital {country.capital}</div>
    <div>Population {country.population}</div>
    <h2>Spoken languages</h2>
    <ul>
      {Object.entries(country.languages)
            .map(([key, value]) => 
                <li key={key}>{value}</li>
      )}
    </ul>
    <img alt="country flag" src={country.flags.png} />
    <Weather capital={country.capital[0]} />
  </div>
)

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=' + capital + '&appid=' + process.env.REACT_APP_API_KEY + '&units=metric')
      .then(response => {
        setWeather(response.data)
        console.log(response.data)
        setHasLoaded(true)
      })
  }, [capital])

  if(hasLoaded) {
    return (
      <div>
        <h2>Weather in {capital}</h2>
        <p><strong>Temperature:</strong> {weather.main.temp} celcius</p>
        <img alt='weather icon' src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
        <Wind speed={weather.wind.speed} angle={weather.wind.spd} />
      </div>
    )
  }
  else return <div>Loading...</div>
}

// could probably simplify this a lot...
const Wind = ({ speed, angle }) => {

  const getDirection = (angle) => {
    if (angle < 11.25 || angle > 348.75) return 'N'
    else if (angle > 326.25) return 'NNW'
    else if (angle > 303.75) return 'NW'
    else if (angle > 281.25) return 'WNW'
    else if (angle > 258.75) return 'W'
    else if (angle > 236.25) return 'WSW'
    else if (angle > 213.75) return 'SW'
    else if (angle > 191.25) return 'SSW'
    else if (angle > 168.75) return 'S'
    else if (angle > 146.25) return 'SSE'
    else if (angle > 123.75) return 'SE'
    else if (angle > 101.25) return 'ESE'
    else if (angle > 78.75) return 'E'
    else if (angle > 56.25) return 'ENE'
    else if (angle > 33.75) return 'NE'
    else  return 'NNE'
  }

  return (
    <div>
      <strong>Wind: </strong> {speed} km/h direction {getDirection(angle)}
    </div>
  )
}

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
      <Countries countries={countries} setFilter={setFilter} filter={filter} />
    </div>
  )
}

export default App;
