
import { useState } from "react"

import AddPerson from "./AddPerson"
import Filter from "./Filter"
import Persons from "./Persons"


const Phonebook = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
      ])

    
    const addPerson = (name, number) => {
        const newPerson = { name, number, id: persons.length + 1 }
        const newPersons = [...persons, newPerson]
        setPersons(newPersons)
        alert(`add ${name} ${number}`)
    }

    return (
        <div>
            <h3>phonebook</h3>
            <Filter persons={persons}></Filter>
            <h3>add a new</h3>
            <AddPerson addPerson={addPerson}></AddPerson>
            <h3>numbers</h3>
            <Persons persons={persons}></Persons>
        </div>
    )
}

export default Phonebook