import Link from "next/link"
import { Shape1 } from "../shapes"

const navItems = [
  {
    label: 'Resume',
    href: '/resume'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

const Header = () => {
  return (
    <header className="flex justify-between py-4 relative container mx-auto">
      <Link className="font-medium font-serif text-3xl text-white hover:underline" href="/">Cesar Antunes</Link>
      <nav>
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.label}>
              <Link className="hover:underline text-lg font-medium font-serif text-orange-900" href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Shape1 className="absolute top-[-68px] left-[-39px] text-orange-900 -z-10 h-auto w-[300px]" />
    </header>
  )
}

export default Header

