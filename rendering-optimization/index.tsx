import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { SearchBar } from './components/search-bar.tsx'
import { SortOptions } from './components/search-options.tsx'
import { PhotoList } from './components/photo-list.tsx'

interface Item {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

function App() {
  const [items, setItems] = useState<Item[]>([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('title')
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toTimeString())
    }, 1000)

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((items) => setItems(items.slice(0, 500)))
  }, [])

  if (items.length === 0) {
    return <h1>Loading</h1>
  }

  const filteredItems = items
    .filter((item) => item.title.includes(search))
    .sort((a, b) => {
      if (sort === 'title') {
        return a.title.localeCompare(b.title)
      } else {
        return a.id - b.id
      }
    })

  return (
    <div style={{ padding: '20px' }}>
      <h1>Photo Gallery {time}</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <SortOptions sort={sort} setSort={setSort} />
      <PhotoList items={filteredItems} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
