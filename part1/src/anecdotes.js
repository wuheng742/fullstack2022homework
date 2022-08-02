
import { useState } from "react"



const Anecdotes = () => {

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
      ]

      const initialVotes = new Array(anecdotes.length).fill(0)

      const [selected, setSelected] = useState(0)
      const [votes, setVotes] = useState(initialVotes)
      const [maxVoteIndex, setMaxVoteIndex] = useState(0)
      
      const selectedHandle = () => {
        const newSelected = Math.floor(Math.random()*anecdotes.length)
        setSelected(newSelected)
      }

      
      const voteHandle = () => {
        let copy = [...votes]
        copy[selected] += 1

        let voteNumber = Math.max(...copy)
        let preVoteNumber = votes[maxVoteIndex]
        if (voteNumber > preVoteNumber) {
            let index = copy.findIndex((item, index) => {
                return item === voteNumber 
            })
            if(index !== maxVoteIndex) {
                setMaxVoteIndex(index)
            }
        }
        
        setVotes(copy)
      }


    return (
        <div>
            <h2>A anecdote of a day</h2>
            <p>
                {anecdotes[selected]}
            </p>
            <p>has {votes[selected]} votes</p>
            <button onClick={voteHandle}>vote</button>
            <button onClick={selectedHandle}>next anecdote</button>
            <h2>A anecdote with most votes</h2>
            <p>
                {anecdotes[maxVoteIndex]}
            </p>
            <p>has {votes[maxVoteIndex]} votes</p>
        </div>
    )
}

export default Anecdotes


