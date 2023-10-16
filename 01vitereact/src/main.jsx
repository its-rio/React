import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

function Sam(){
  let username = "Sangu";

  return(
    <>
      <h1>Hello Brother {username}</h1>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Chai/>
    {/* // Running function with evaluated expression */}
    <Sam/>
  </React.StrictMode>
)
