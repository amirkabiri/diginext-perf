import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

function DateComponent() {
  const [date, setDate] = useState(() => String(new Date()))

  useEffect(() => {
    const bigLargeArray = Array.from({ length: 10e5 }, () => Math.random())
    let i = 0
    setInterval(() => {
      setDate(String(new Date()) + ' ' + bigLargeArray[i++])
    }, 1000)
  }, [])

  return <div>Date: {date}</div>
}

function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow((show) => !show)}>toggle</button>
      {show && <DateComponent />}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
