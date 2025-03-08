import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='p-5 bg-amber-300 rounded-t-xl hover:bg-amber-950 transition-all duration-500'>
        <h1 className='text-emerald-400'>Reycarl</h1>
        <h2>Tailwind</h2>
        <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
    </>
  )
}

export default App
