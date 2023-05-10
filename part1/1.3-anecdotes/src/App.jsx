import { useState } from 'react'

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

const HighestScoringAnecdote = ({ votes, anecdotes }) => {
    const anecdoteIds = Object.keys(votes);
    const anecdoteVotes = Object.values(votes);
    const maxValue = Math.max(...anecdoteVotes);
    const mostVotedId = anecdoteIds.filter(id => votes[id] === maxValue)
    //logging the index/id of the anecdote that is the most popular 
    console.log(mostVotedId);
    return (
      <p>"{
        !anecdotes[mostVotedId] ? "No votes yet or there is a tie" : `${anecdotes[mostVotedId]}`}"</p>
    );
}

function App() {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  console.log(votes);

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const randomIndex = anecdotesArray => {
    const randomIndex = Math.floor(Math.random() * anecdotesArray.length);
    return randomIndex;
  }

  const handleGenerate = () => {
    setSelected(randomIndex(anecdotes));
  }

  const handleVote = () => {
    const eleId = document.getElementById(selected).getAttribute('id');
    //coying original state
    const newVotesObj = votes;
    //using original state,check if property value exist if not add property in state copy with value of one. If it exist then a vote will be added to the state copy and then sent it to update state
    if (votes[eleId] === undefined) {
      newVotesObj[eleId] = 1;
      setVotes({ ...newVotesObj });
    } else {
      const previousVote = newVotesObj[eleId];
      newVotesObj[eleId] = previousVote + 1;
      setVotes({ ...newVotesObj });
    }
  }

  return (
    <div>
      <Header title="Random Anecdote" />
      <p id={selected}>"{anecdotes[selected]}"</p>
      <p>This anecdote has: {!votes[selected] ? 0 : votes[selected]} Votes!</p>
      <Button text="Generate Anecdote" handleClick={handleGenerate} />
      <Button text="Vote" handleClick={handleVote} />
      <hr />
      <Header title="Anecdote with the most votes:" />
      <HighestScoringAnecdote votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App
