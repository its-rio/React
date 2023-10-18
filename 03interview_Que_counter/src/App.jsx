import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  /* ye ek interview question hai ke output kya ayega, kyunke useState code ko batches me bhejta hai to, ye sav code
  ek hoke jayega, So Answer after clicking Is INCREMENT BY ONE NOT FOUR */
  const addValue = () =>{
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)

    // Now if we use this code it increase value by 4, cause use callback function, use Previous Counter
    // setCounter(counter =>counter + 1)
    // setCounter(counter =>counter + 1)
    // setCounter(counter =>counter + 1)
    // setCounter(counter =>counter + 1)
    console.log("Clicked " , counter);
  }

  let subValue = () =>{
    setCounter(counter - 1)
  }
  if(counter>=0 && counter <=40)
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /><br />
      <button onClick={subValue}>Rempove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
