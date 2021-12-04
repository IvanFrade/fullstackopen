import React from "react"
import Person from "./Person"

const Persons = ({ persons, filter }) => (
    <div>
      {persons.filter(person => 
                person.name.toLowerCase().includes(filter))
                .map(person =>
                  <Person key={person.id} person={person} />
                )}
    </div>
)

export default Persons