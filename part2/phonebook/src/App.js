import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Hello world!'}
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    }

    persons.some(person => person.name === personObject.name)
    ? alert(`${newName} has already been added to the notebook!`)
    : setPersons(persons.concat(personObject))
    
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            placeholder="Insert new person"
          />
        </div>
        <button type="submit">add person</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <div key={person.name}>{person.name}</div>
        )}
      </div>
    </div>
  )
}

export default App;
