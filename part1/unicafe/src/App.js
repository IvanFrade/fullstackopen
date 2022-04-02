import { useState } from "react";

const Title = ({ text }) => (
  <h1>{text}</h1>
)

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad

  if (total === 0) {
    return (
      <div>
        <Title text={'statistics'} />
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <Title text={'statistics'} />
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={total} />
          <StatisticLine text='average' value={((good - bad) / total).toPrecision(1)} />
          <StatisticLine text='positive' value={(good / total * 100).toPrecision(3) + '%'} />
        </tbody>
      </table>        
    </div>
  )
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <th>{text}</th>
    <th>{value}</th>
  </tr>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  return (
    <div>
      <Title text={'give feedback'} />
      <Button onClick={goodClick} text='good' />
      <Button onClick={neutralClick} text='neutral' />
      <Button onClick={badClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
