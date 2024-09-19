import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://0dcdee41b8186be9dd297d71d69341ec@sentry.hamravesh.com/7158',
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
  sampleRate: 1,
  profilesSampleRate: 1,
  initialScope: {
    tags: {
      test: Math.random() < 0.5 ? 'a' : 'b',
    },
  },
})

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
