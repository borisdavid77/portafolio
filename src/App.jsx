import { useState } from 'react'
import bz_png from './assets/bz.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src={bz_png} className="image_bz" alt="React logo" width="250px" height="250px" />
      </div>
      <h1>Boris Zambrano</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
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
