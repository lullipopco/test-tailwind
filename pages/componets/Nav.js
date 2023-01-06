import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'


export default function Nav() {
  return (
    
  <nav className="fixed w-full top-0 z-10 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-[#e17e99]">
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <span className="flex pt-2 h-10">
         
          </span>
        <div className="flex space-x-4  text-gray-900">
          <a href="#">Shop</a>
          <a href="#">Greenroom</a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>
    </div>
  </nav>
  )
}
