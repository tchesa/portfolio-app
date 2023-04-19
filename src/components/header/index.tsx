import Link from "next/link"
import { Shape1 } from "../shapes"
import { FiGithub } from "react-icons/fi"

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
    <header className="flex justify-between py-4 relative container mx-auto px-8">
      <Link className="font-medium font-serif text-3xl text-white hover:underline" href="/">Cesar Antunes</Link>
      <nav>
        <ul className="flex space-x-6 items-center">
          {navItems.map(item => (
            <li key={item.label}>
              <Link className="hover:underline text-lg font-medium font-serif text-orange-900" href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link className="text-orange-900" href="https://github.com/tchesa" target="_blank">
              <FiGithub className="text-2xl" />
            </Link>
          </li>
        </ul>
      </nav>
      <Shape1 className="absolute top-[-78px] left-[-49px] text-orange-900 -z-10 h-auto w-[350px]" />
    </header>
  )
}

export default Header

