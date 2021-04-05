import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <>
    <div>Index Page</div>
    <Link href='/notes'>
      <a>
        Notes
      </a>
    </Link>
    </>
  )
}

export default Page