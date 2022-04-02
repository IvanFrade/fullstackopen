const Persons = ({ persons, filter, deletePerson }) => (
    <div>
      {persons
        .filter(person => person.name.toLowerCase().includes(filter))
        .map(person => 
          <Person 
            key={person.id} 
            person={person}
            deletePerson={() => deletePerson(person.id)} 
          />)}
    </div>
  )
  
  const Person = ({ person, deletePerson }) => (
    <div>
      {person.name + ' '} 
      {person.number + ' '} 
      <button onClick={deletePerson}>delete</button>
    </div>
  )

  export default Persons