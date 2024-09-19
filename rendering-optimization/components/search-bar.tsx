import { Input } from 'antd'
import React from 'react'

export const SearchBar = ({ search, setSearch }) => {
  return (
    <Input
      value={search}
      placeholder="Search"
      onChange={(e) => setSearch(e.target.value)}
      style={{ marginBottom: '20px' }}
    />
  )
}
