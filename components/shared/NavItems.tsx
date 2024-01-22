import { headerLinks } from "@/constants"
import Link from "next/link"

const NavItems = () => {
  return (
    <ul className="md:flex-between flex">
      {headerLinks.map((link) => {
        return (
          <li>
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems