import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef method use for highlight selected text
  const passwordRef = useRef(null)

  // useCallback hook is use to run the methods in useState many times
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="1234567890"
    if(charAllowed) str+="!@#$%^&*-_+="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  //useEffect hook is use to run the callback hook 
  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed])
  
  const copyPasswortToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 11)
    window.navigator.clipboard.writeText(password)}, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-2xl text-center text-white m-2'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3' 
          placeholder='password' 
          readOnly 
          ref={passwordRef}
          />
          <button onClick={copyPasswortToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={12} value={length} className='cursor-pointer' 
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'
            onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput'
            onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
