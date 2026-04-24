import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"} className='text-primary-text text-xl font-bold'>
        <span className='inline-flex items-center justify-center bg-gradient size-8 rounded-md mr-0.5'>Ne</span>FET
    </Link>
  )
}

export default Logo