import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      {/* Full-screen animated background */}

      {/* Content */}
      <div className="p-2 w-fit max-w-sm mx-auto flex flex-col items-center justify-center bg-amber-950 m-2 rounded-2xl">
        <h2 className="text-emerald-400 text-4xl font-bold">Reycarl</h2>
        <h2 className="text-3xl font-bold underline text-white">Hello world!</h2>
      </div>

      <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
        <div>
          <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style>
        {`
          @keyframes customMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </>
  );
}

export default App;
