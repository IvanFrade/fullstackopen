import { useState } from "react";

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Title = ({ text }) => (
  <h1>{text}</h1>
)

const DisplayAnecdote = ({ anecdote, votes }) => (
  <div>
    {anecdote} <br />
    has {votes} votes
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often', 
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the developement time... The remaining 10 percent of the code accounts for the other 90 percent of the developement time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  let mostVoted = votes.indexOf(Math.max(...votes))

  const setAnecdote = () => {
    let rnd
    do { 
      rnd = Math.trunc(Math.random() * anecdotes.length)
    } while (rnd === selected)
    
    setSelected(rnd)
  }

  const voteAnecdote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <Title text={'Anecdote of the day'} />
      <DisplayAnecdote 
        anecdote={anecdotes[selected]} 
        votes={votes[selected]} 
      />
      <Button onClick={voteAnecdote} text={'vote'} />
      <Button onClick={setAnecdote} text={'next anecdote'} />

      <Title text={'Anecdote with most votes'} />
      <DisplayAnecdote 
        anecdote={anecdotes[mostVoted]} 
        votes={votes[mostVoted]} 
      />
    </div>
  )
}

export default App
