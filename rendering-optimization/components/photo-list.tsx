import React from 'react'
import { PhotoCard } from './photo-card.tsx'

export const PhotoList = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {items.map((item) => (
        <PhotoCard key={item.id} item={item} />
      ))}
    </div>
  )
}
