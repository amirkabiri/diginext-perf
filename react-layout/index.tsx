import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [date, setDate] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return <div>Date: {String(date)}</div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
