'use client'

import Link from "next/link"
import { useState } from "react"
import { FiMenu, FiX } from 'react-icons/fi'
import './style.css'

type Props = {
  className?: string
}

const SideNav = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button type="button" className={`p-2 ${className || ''}`} onClick={open}>
        <FiMenu className="text-orange-900 text-2xl" />
      </button>
      <div className={`flex fixed w-screen h-screen top-0 right-0 z-10 overflow-hidden ${isOpen ? '' : 'pointer-events-none'}`}>
        <button type="button" onClick={close} className={`backdrop-button block grow bg-black ${isOpen ? 'bg-opacity-40' : 'bg-opacity-0'}`} />
        <nav className={`side-panel block w-[300px] border-l-2 border-black bg-white ${isOpen ? 'mr-0' : '-mr-[300px]'}`}>
          <div className="text-right mb-6 pt-4 pr-5">
            <button type="button" className="p-2" onClick={close}>
              <FiX className="text-2xl text-orange-900" />
            </button>
          </div>
          <ul className="space-y-6 px-8">
            <li>
              <Link className="hover:underline text-xl font-medium font-serif text-orange-900" href="/resume">Resume</Link>
            </li>
            <li>
              <Link className="hover:underline text-xl font-medium font-serif text-orange-900" href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SideNav
