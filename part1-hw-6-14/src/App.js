import { useState } from "react";
import Header from "./components/header";
import Button from './components/button';
import Statistics from "./components/statistic";
function App() {
  
  //for the three stats
  const [stats, setStats] = useState({
      good: 0,
      neutral: 0,
      bad: 0
  })

  //all
  const [all, setAll] = useState({
    total: 0
  })

  //avg
  const [avg, setAvg] = useState({
    mean: 0
  })

  //positive
  const [positives, setPositive] = useState({
    calc: 0
  })

  //variables for Math
  let avgMean = ((all.total)/3).toFixed(2)
  //Math for positive ratio
  let positive = Number(stats.good)/Number(all.total)
  
  //hooks
  const goodButton = () => {
    setStats({...stats,  good: stats.good + 1 })
    setAll({total: all.total + 1})
    setAvg({mean: avgMean})


    //hook to display positive ratio
    setPositive({calc: positive})
  }

  const badButton = () => {
    setStats({...stats, bad: stats.bad + 1})
    setAll({total: all.total+1})
    setAvg({mean: avgMean})
    setPositive({calc: positive})
  }

  const neutralButton = () => {
    setStats({...stats, neutral: stats.neutral + 1})
    setAll({total: all.total + 1})
    setAvg({mean: avgMean})
    setPositive({calc: positive})
  }
  
  if(stats.good === 0 && stats.bad === 0 && stats.neutral === 0){
    return (
      <div>
        <Header text = 'give feedback' />
        <Button text = 'good' event = {goodButton}/>
        <Button text = 'neutral' event = {neutralButton}/>
        <Button text = 'bad' event={badButton}/>

        <Header text = 'Statistics'/>
        <p>No feedback given</p>
      </div>
      
    )
  }
  return (
    <div className="App">

      <Header text = 'give feedback' />
      <Button text = 'good' event = {goodButton}/>
      <Button text = 'neutral' event = {neutralButton}/>
      <Button text = 'bad' event={badButton}/>

      <Header text = 'Statistics'/>
      <Statistics good = {stats.good} bad = {stats.bad} neutral = {stats.neutral} all = {all.total} average = {avg.mean} positive = {positives.calc}/>

      {/* Display for positive Ratio */}
      
    </div>
  );
}

export default App;
