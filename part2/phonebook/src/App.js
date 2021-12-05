import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName, 
      number: newNumber, 
      id: persons[persons.length - 1].id + 1
    }

    persons.some(person => person.name === personObject.name)
    ? alert(`${newName} has already been added to the notebook!`)
    : setPersons(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => setFilter(event.target.value.toLowerCase())
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handle={handleFilterChange} />
      <h2>Add new contact</h2>
      <PersonForm addPerson={addPerson} 
                  newName={newName} 
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App;
