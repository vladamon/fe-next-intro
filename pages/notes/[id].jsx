import React from 'react'
import { useRouter } from 'next/router'

const Note = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <>
      <div>Note Page</div>
      <h1>{id}</h1>
    </>
  )
}

export default Note