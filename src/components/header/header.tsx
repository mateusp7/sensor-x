"use client"

import Link from "next/link"
import { FullLogo } from "../svg/logo"
import { NavigationContent } from "./navigation-content"
import { NavigationItem } from "./navigation-item"

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between gap-4 py-6 px-7 h-20 header-shadow">
      <Link href="/">
        <FullLogo />
      </Link>
      <NavigationContent>
        <ul className="flex flex-row gap-8">
          <NavigationItem content="Página inicial" href="/" />
          <NavigationItem content="Enviar tweet" href="/tweet-sentiment" />
          <NavigationItem content="Tweets" href="/tweets" />
        </ul>
      </NavigationContent>
    </header>
  )
}
