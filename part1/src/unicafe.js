
import { useState } from "react"


const Header = ({title}) => {

    return (
        <>
            <h2>{title}</h2>
        </>
    )
}

const Button = ({handle, text}) => {
    return (
        <button onClick={handle}>{text}</button>
    )
}

const ButtonList = ({handles}) => {

    return (
        <>
            <Button handle={handles[0]} text={'good'}></Button>
            <Button handle={handles[1]} text={'neutral'}></Button>
            <Button handle={handles[2]} text={'bad'}></Button>
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {


    if (!good && !neutral && !bad) {
        return (
            <>
                <Header title={'Statistics'}></Header>
                <div>
                    no feedback given
                </div>
             </>
        )
    }
    
    const all = good + neutral + bad
    const avg = good * neutral * bad / 3
    const positive = (neutral + bad) ? good/(neutral + bad) * 100 : 0

    return (
        <>
            <Header title={'Statistics'}></Header>
            <table>
            <tbody>
                <StatisticsLine text={"good"} value={good}></StatisticsLine>
                <StatisticsLine text={"neutral"} value={neutral}></StatisticsLine>
                <StatisticsLine text={"bad"} value={bad}></StatisticsLine>
                <StatisticsLine text={"all"} value={all}></StatisticsLine>
                <StatisticsLine text={"average"} value={avg}></StatisticsLine>
                <StatisticsLine text={"positive"} value={positive + '%'}></StatisticsLine>
            </tbody>
        </table>
        </>


    )
}

const StatisticsLine = ({text, value}) => {

    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Unicafe = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodHandle = () => {
        console.log('click good btn')
        setGood(good + 1)
    }

    const neutralHandle = () => {
        setNeutral(neutral + 1)
    }

    const badHandle = () => {
        setBad(bad + 1)
    }

    const handles = [goodHandle, neutralHandle, badHandle]

    return (
        <div>
            <Header title={'give feedback'}></Header>
            <ButtonList handles={handles}></ButtonList>
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}


export default Unicafe

