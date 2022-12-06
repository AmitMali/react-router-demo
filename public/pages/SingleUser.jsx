import React from 'react'
import { useParams } from 'react-router-dom'


const SingleUser = () => {
    let {uid}=useParams()
  return (
    <div>SingleUser {uid}</div>
  )
}

export default SingleUser