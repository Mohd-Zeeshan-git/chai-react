import { useState } from 'react'
import './App.css'

function App() {
    const [Color,setColor]= useState('olive')

  return (
    <>
      <div className='w-full h-screeen duration-200'
      style={{backgroundColor:Color}}
      >
        <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className=' flex flex-wrap justify-center gap -3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button onClick={()=>setColor("red")} className='outline-none px-2 py-1 rounded-full ' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={()=>setColor("green")} className='outline-none px-2 py-1 rounded-full ' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={()=>setColor("blue")} className='outline-none px-2 py-1 rounded-full ' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={()=>setColor("yellow")}   className='outline-none px-2 py-1 rounded-full ' style={{ backgroundColor: "yellow" }}>Yellow</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
