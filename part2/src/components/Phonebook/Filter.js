
import { useState } from "react"
import Persons from "./Persons"

const Filter = ({persons}) => {

    const [filter, setFilter] = useState('')
    const [filterPersons, setFilterPersons] = useState([])

    const changeHandle = (e) => {
        let value = e.target.value
        setFilter(value)
        if (!value || value === ' ') {
            setFilterPersons([])
            return
        }

        const newArray = persons.filter((item)=> {
            const reg = new RegExp(value)
            const index = item.name.search(reg)
            console.log(index)
            return index >= 0
        })
        setFilterPersons(newArray)
    }

    return (
        <div>
            <form action="#">
                <span>filter shown with</span>
                <input type="text" value={filter} onChange={changeHandle}/>
            </form>
            <Persons persons={filterPersons}></Persons>
        </div>
    )
}

export default Filter