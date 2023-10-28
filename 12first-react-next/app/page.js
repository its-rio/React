"use client"
import  {Header} from '@/components/Header'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

 
function page() {
  const [user, setuser] = useState("Rio")
  const [editor, seteditor] = useState("Akarsh")
  
  return (
    <>

    {/* <Header /> */}
    <h1>This is home page</h1>
        <Link href="/About"></Link>
        <Link href="/Blog"></Link>
        <Link href="/Career"></Link>
    
    </>
  )
}

export default page