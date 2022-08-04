import { useState } from "react"


const AddPerson = ({addPerson}) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleAdd = (e) => {
        e.preventDefault()
        if (name && number) {
            addPerson(name, number)
        }
    }

    return (
        <div>
            <form action="#">
                <span>name:</span><input type="text" value={name} onChange={handleName}/>
                <br />
                <span>number:</span><input type="text"  value={number} onChange={handleNumber}/>
                <button onClick={handleAdd}>add</button>
            </form>
            
        </div>
    )
}

export default AddPerson