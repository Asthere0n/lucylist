import React from 'react'
import {Button} from '@/components/ui/button'

export default function Header() {
  return (
      <header className='flex justify-between w-full h-20 items-center bg-pink-500'>
          <h1 className='flex-grow-1 text-center text-4xl text-white'>
              Lucy's Super<span>cool</span> List
          </h1>
          <ul className='m-5 flex gap-5'>
              <li><Button>Home</Button></li>
              <li><Button>History</Button></li>
          </ul>
      </header>
  )
}
