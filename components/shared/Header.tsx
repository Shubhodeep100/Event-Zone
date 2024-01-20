import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import NavItems from "./NavItems"
const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/">
                    <Image src="/assets/images/showLogo.png" alt="Icon" width={250} height={50} />
                </Link>
                <SignedIn>
                    <nav className="md:flex-between hidden w-full max-w-xs">
                        <NavItems />
                    </nav>
                </SignedIn>

                <div className="flex w-32 justify-end">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        <NavItems />
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className="rounded-full" size="lg">
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header