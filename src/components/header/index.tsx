import Link from "next/link"
import { Shape1 } from "../shapes"
import { FiGithub, FiTwitter } from "react-icons/fi"

const Header = () => {
  return (
    <header className="flex justify-between py-4 relative container mx-auto px-8">
      <Link className="font-medium font-serif text-3xl text-white hover:underline" href="/">{"<>cesar.</>"}</Link>
      <nav>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link className="hover:underline text-lg font-medium font-serif text-orange-900" href="/resume">Resume</Link>
          </li>
          <li>
            <Link className="hover:underline text-lg font-medium font-serif text-orange-900" href="/contact">Contact</Link>
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
    </header>
  )
}

export default Header

