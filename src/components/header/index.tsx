import Link from "next/link"
import { Shape1 } from "../shapes"
import SideNav from "../side-nav"

const Header = () => {
  return (
    <header className="py-4">
      <div className="flex justify-between relative page-layout">
        <Link className="font-medium font-serif text-3xl text-white hover:underline" href="/">{"<>cesar.</>"}</Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link className="hover:underline text-lg font-medium font-serif text-orange-900 bg-orange-50" href="/resume">Resume</Link>
            </li>
            <li>
              <Link className="hover:underline text-lg font-medium font-serif text-orange-900 bg-orange-50" href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Shape1 className="absolute top-[-78px] left-[-49px] text-orange-900 -z-10 h-auto w-[350px]" />
      </div>
      <SideNav className="md:hidden absolute top-4 right-6" />
    </header>
  )
}

export default Header

