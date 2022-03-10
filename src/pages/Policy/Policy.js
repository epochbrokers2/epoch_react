import React from 'react'
import { useParams } from 'react-router-dom'

function Policy() {
    const params = useParams();
    console.log(params)
  return (
    <div>Product: {params.slug}</div>
  )
}

export default Policy