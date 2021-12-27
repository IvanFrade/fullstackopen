import React from "react"
import Button from "./Button"

const Person = ({ person, deletePerson }) => (
    <div>
        {person.name} {person.number} <Button text={"delete"} onClick={() => deletePerson(person.id)}/>
    </div>
)

export default Person