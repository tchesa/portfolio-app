import Link from "next/link"

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
    <header className="flex justify-between py-4 px-6">
      <Link className="font-medium" href="/">tchesa</Link>
      <nav>
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.label}>
              <Link className="hover:underline" href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

