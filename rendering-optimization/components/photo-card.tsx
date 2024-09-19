import { Avatar, Card } from 'antd'
import React from 'react'

export const PhotoCard = ({ item }) => {
  return (
    <Card style={{ width: '100%', marginBottom: 10 }}>
      <Avatar src={item.url} size={64} />
      <h3>{item.title}</h3>
    </Card>
  )
}
