import React, { useState } from 'react'

const Title = ({ value }) => <h2>{value}</h2>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  let count = good + neutral + bad
  let sum = good - bad

  if (count === 0) return (
    <>
      <Title value='Statistics' />
      <div>No feedback given</div>
    </>
  )

  return (
    <>
      <Title value='Statistics' />
      <Counter text='good' counter={good} />
      <Counter text='neutral' counter={neutral} />
      <Counter text='bad' counter={bad} />
      <Counter text='total' counter={count} />
      <Counter text='average' counter={sum / count} />
      <Counter text='positive %' counter={good / count * 100} />
    </>
  )
}

const Counter = ({ text, counter }) => (
  <>
    {text} {counter}<br/>
  </>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  return (
    <div>
      <Title value='Give feedback' />
      <Button handleClick={() => {setGood(good + 1)}} text='good' />
      <Button handleClick={() => {setNeutral(neutral + 1)}} text='neutral' />
      <Button handleClick={() => {setBad(bad + 1)}} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
