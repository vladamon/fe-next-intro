import React from 'react'
import { useRouter } from 'next/router'

const Params = () => {
  const router = useRouter()

  const { params } = router.query

  console.log(params)

  return (
    <>
      <div>Note Page</div>
      {
        params.map(item => <p>{item}</p>)
      }
    </>
  )
}

export default Params