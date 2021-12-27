import React from "react"
import Person from "./Person"

const Persons = ({ persons, filter, deletePerson }) => (
    <div>
      {persons
        .filter(person => person.name.toLowerCase().includes(filter))
        .map(person => <Person key={person.id} person={person} deletePerson={deletePerson}/>)
      }
    </div>
)

export default Persons