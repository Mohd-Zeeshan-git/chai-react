import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(7)
  const [numAllowed, setNumAllowed] = useState(false)
  const [symAllowed, setSymAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef
  const passwordRef = useRef(null);
  // const passwordGenerator= ()=>{}
  // const generatePassword= useCallback(fn,dependency)
  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass = "";
    if (numAllowed) {
      str +="0123456789"
    }
    if (symAllowed) {
      str +="!@#$%^&*()-+"
    }
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length)
      // pass += str[randomIndex]
      pass +=str.charAt(randomIndex)
    }
    setPassword(pass)
  }, [length, numAllowed, symAllowed, setPassword])
  
  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.focus();
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,15)
   }, [password])
  
  useEffect(() => {
    passwordGenerator()
  },[length,numAllowed,symAllowed,passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto rounded-lg my-7 px-4 bg-gray-700 py-4'>
        <div className='flex rounded-lg overflow-hidden m-4 bg-white '>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 '
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className='outline-none bg-blue-700 px-3 py-0.5  shrink-0 text-white'>Copy</button>
        </div>
        <div className='flex gap-x-2 text-sm'>
          <div className='flex gap-x-1 item-center'>
            <input type="range"
              min={7}
              max={20}
              value={length}
              className='cursor-pointer '
            onChange={(e)=>setLength(e.target.value)}/>
            <label >Length:{length} </label>
          </div>
          <div className='flex gap-x-1 item-center'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='numInput'
              onChange={() => {
                setNumAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor="numInput">Number</label>
          </div>
               <div className='flex gap-x-1 item-center'>
            <input type="checkbox"
              defaultChecked={symAllowed}
              id='symInput'
              onChange={() => {
                setSymAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor="symInput">Symbol</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
