import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {  
      name: 'Hello world!', 
      number: '123456'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName, 
      number: newNumber
    }

    persons.some(person => person.name === personObject.name)
    ? alert(`${newName} has already been added to the notebook!`)
    : setPersons(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person => 
          <div key={person.name}>{person.name} {person.number}</div>
        )}
      </div>
    </div>
  )
}

export default App;
