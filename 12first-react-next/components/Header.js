import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <>
    <div className='h-16 px-7 bg-green-400 flex items-center justify-between'>
      <h1>Logo</h1>
    
    <div className='flex gap-3'>
      <Link href="/About">About</Link>
      <Link href="/Career">Career</Link>
      <Link href="/Blog">Blog</Link>
      <Link href="/Account">Account</Link>
    </div>
    </div>
    </>
  )
}

export default Header