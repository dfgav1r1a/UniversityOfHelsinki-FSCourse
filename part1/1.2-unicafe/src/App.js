import { useState } from 'react';

const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

//child of statistics
const StatisticTableRow= ({ text, value }) => {
  return (
    <tr>
      <th scope='row'>{text}</th>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const totalVotes = goodCount + neutralCount + badCount;
  const totalPositiveVotes = (goodCount * 100) / totalVotes || 0;
  const average = (goodCount - badCount) / totalVotes || 0;

  if (totalVotes === 0) {
    return (
      <h4>No feedback given</h4>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <StatisticTableRow text="Good" value={goodCount} />
          <StatisticTableRow text="Neutral" value={neutralCount} />
          <StatisticTableRow text="Bad" value={badCount} />
          <StatisticTableRow text="Total votes" value={totalVotes} />
          <StatisticTableRow text="Average" value={average} />
          <StatisticTableRow text="Positive Feedback" value={`${totalPositiveVotes} %`} />
        </tbody>
      </table>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <main>
      <div>
        <Header title="Give Feedback" />
      </div>
      <div>
        <Button text="Good" handleClick={handleGoodClick} />
        <Button text="Neutral" handleClick={handleNeutralClick} />
        <Button text="Bad" handleClick={handleBadClick} />
      </div>
      <div>
        <Header title="Statistics" />
      </div>
      <div>
        <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
      </div>
    </main>
  );
}

export default App;
