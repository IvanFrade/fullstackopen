const PersonForm = ({ addNumber, newName, handleNewName, newNumber, handleNewNumber }) => (
    <form onSubmit={addNumber}>
      <div>
        name: <input 
          value={newName}
          onChange={handleNewName}
        />
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={handleNewNumber}
        />
      </div>
      <button type='submit'>add</button>
    </form>
  )

  export default PersonForm