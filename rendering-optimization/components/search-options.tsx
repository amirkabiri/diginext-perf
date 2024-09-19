import { Select } from 'antd'
import React from 'react'

export const SortOptions = ({ sort, setSort }) => {
  return (
    <Select
      value={sort}
      onChange={(value) => setSort(value)}
      style={{ marginBottom: '20px', width: '200px' }}
    >
      <Option value="title">Sort by Title</Option>
      <Option value="id">Sort by ID</Option>
    </Select>
  )
}
