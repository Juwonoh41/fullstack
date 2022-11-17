import { useState } from "react"
import History from "./components/history"
import Button from './components/button'
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right:0
  })
  const [array, setArray] = useState([])
  const leftClick = () => {
    setArray(array.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})
  }

  const rightClick = () => {
    setArray(array.concat('R'))
    setClicks({...clicks,right: clicks.right +  1})
  }

  const deleteAll = () => {
    setArray([])
    setClicks({left: 0, right: 0})
  }
  return (
    <div>
      {clicks.left}
      <Button event = {leftClick} text = 'left'/> 
      <Button event = {deleteAll} text = 'delete'/>
      <Button event = {rightClick} text = 'right'/>
      
      {clicks.right}
      <History array = {array}/>
      

    </div>
  )
}

export default App;
