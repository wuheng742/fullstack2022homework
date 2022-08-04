
import PersonLine from "./PersonLine"

const Persons = ({persons}) => {

    return (
        <div>
            {
                persons.map((element) => {
                    return (
                        <PersonLine key={element.id} name={element.name} number={element.number}></PersonLine>
                        
                    )
                })
            }
        </div>
    )
}

export default Persons