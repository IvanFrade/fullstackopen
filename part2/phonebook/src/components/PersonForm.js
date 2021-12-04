import React from "react";
import InputForm from "./InputForm";

const PersonForm = (props) => (
    <form onSubmit={props.addPerson}>
      <div>
        name: <InputForm value={props.newName} onChangeFunction={props.handleNameChange} /><br />
        number: <InputForm value={props.newNumber} onChangeFunction={props.handleNumberChange} />
      </div>
      <button type="submit">add</button>
    </form>
)

export default PersonForm