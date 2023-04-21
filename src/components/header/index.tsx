import Link from "next/link"
import { Shape1 } from "../shapes"
import { FiGithub, FiTwitter } from "react-icons/fi"
import { AiOutlineWhatsApp } from "react-icons/ai"
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
            <li>
              <Link className="text-orange-900" href="https://wa.me/5531999949263" target="_blank">
                <AiOutlineWhatsApp className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link className="text-orange-900" href="https://github.com/tchesa" target="_blank">
                <FiGithub className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link className="text-orange-900" href="https://twitter.com/tchesa" target="_blank">
                <FiTwitter className="text-2xl" />
              </Link>
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

