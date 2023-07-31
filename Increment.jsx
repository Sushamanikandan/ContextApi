import React,{useContext} from 'react'
import { AppContest } from './Context'
function Increment() {
  const {data,fun1,fun2}=useContext(AppContest)
  return (
    <div>
      <p>count is {data}</p>
      <button  className="btn" onClick={fun1}> Increment</button>
      <button  className="btn"onClick={fun2}>Decrement</button>
    </div>
  )
}

export default Increment
