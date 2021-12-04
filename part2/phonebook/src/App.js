import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
      <div>
        filter by name: <input
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <h2>Add new contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            placeholder="Name"
          /><br />
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
            placeholder="Phone number"
          />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.filter(person => 
                  person.name.toLowerCase().includes(filter))
                .map(person => 
                  <div key={person.id}>{person.name} {person.number} {person.id}</div>
        )}
      </div>
    </div>
  )
}

export default App;
