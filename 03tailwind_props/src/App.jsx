import './App.css'
import Card from './components/card'

function App() {
let myObj = {
  username: "rio",
  age: 21
}

let myArr = [1,2,3,4]

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">Hello Guys</h1>
      <Card username="Chaiaurcode" btnText="Button Daba" />
      <Card username="Rio Sang" btnText={"Visit me"} />
    </>
  )
}

export default App
