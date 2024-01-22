import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
import { usePathname } from "next/navigation"





const MobileNav = () => {


 
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle ml-4">
          <Image src="/assets/icons/menu.svg" alt="menu" width={24} height={24} className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white">
          <Image src="/assets/images/showLogo.png" alt="Icon" width={128} height={38} />
          <Separator className="border border-gray-50"/>
          <NavItems/>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav