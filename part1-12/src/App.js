import { useState } from 'react'
import Button from './components/button'
import Header from './components/header'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  

  const [selected, setSelected] = useState({
    num: 0
  })


  const [points, setPoints] = useState({
    0:0, 
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  })

  const [highestIndex, setHighestIndex] = useState({
    index: 0
  })

  const randomButton = () => {
    setSelected({num: Math.floor( Math.random() * (anecdotes.length-1))})
    
  }

  const voteButton = () => {
    setPoints(prevPoints => {
      return { 
        ...prevPoints, 
        [selected.num]: prevPoints[selected.num] + 1 
      }})
    greatest()
    console.log(points[0])
  }

  const greatest = () => {
    
    for(let i = 0; i < anecdotes.length-1; i++){
    if(points[i] > points[highestIndex.index]){
      setHighestIndex({index: i})
      console.log(points)
      }
    }
  }
  
  return (
    <div>
      <Header text = 'Anecdote of the date'/>
      {anecdotes[selected.num]}
      <div>
        has {points[selected.num]}
      </div>
      <div>
      <Button random = {voteButton} text = 'vote'/>
      <Button random = {randomButton} text = 'next anecdote'/>
      </div>
      <Header text = 'Anecdote with the most votes'/>
      {anecdotes[highestIndex.index]}
      <div>has {points[highestIndex.index]}</div>
      
    </div>
  )
}

export default App;
