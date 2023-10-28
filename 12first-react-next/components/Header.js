"use client"
import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <>
    <div>
        <h1>This is home page</h1>
        <Link href="/About"></Link>
        <Link href="/Blog"></Link>
        <Link href="/Career"></Link>
     
    </div>
    </>
  )
}

 
