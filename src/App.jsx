import { useState } from 'react'
import bz_png from './assets/bz.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen bg-blue-100 grid justify-center">
      <div>
        <img src={bz_png} className="rounded-full" alt="React logo" width="250px" height="250px" />
      </div>
      <h1 className='text-6xl'>Boris Zambrano</h1>
      <div className="card">
        <button className='rounded-lg bg-violet-600 p-1 text-lg uppercase cursor-pointer hover:bg-violet-800' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Powered By Boris Zambrano
      </p>
    </div>
  )
}

export default App
