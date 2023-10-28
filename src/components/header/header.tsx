"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FullLogo } from "../svg/logo"
import { MenuHamburguer } from "./menu-hamburguer"
import { NavigationContent } from "./navigation-content"
import { NavigationItem } from "./navigation-item"

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)
  const itensMenuRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenMenu(false)
      }
      if (
        itensMenuRef.current &&
        !itensMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpenMenu(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <header className="flex flex-row items-center justify-between gap-4 py-6 px-7 h-20 header-shadow">
      <Link href="/">
        <FullLogo />
      </Link>
      <div ref={menuRef} className="md:hidden flex relative">
        <MenuHamburguer setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
        {isOpenMenu && (
          <NavigationContent
            ref={itensMenuRef}
            className="z-50 animationToBottom flex md:hidden absolute right-0 top-12 bg-neutral-1 border-2 border-neutral-2 w-40 "
          >
            <ul className="flex flex-col  w-full">
              <NavigationItem
                handleClickLink={() => setIsOpenMenu(false)}
                content="Página inicial"
                href="/"
                className="h-full  border-b-2 border-neutral-2 py-4"
              />
              <NavigationItem
                handleClickLink={() => setIsOpenMenu(false)}
                content="Enviar tweet"
                href="/tweet-sentiment"
                className="h-full  border-b-2 border-neutral-2 py-4"
              />
              <NavigationItem
                handleClickLink={() => setIsOpenMenu(false)}
                content="Tweets"
                href="/tweets"
                className="h-full py-4"
              />
            </ul>
          </NavigationContent>
        )}
      </div>
      <NavigationContent className="hidden md:flex">
        <ul className="flex flex-row gap-8">
          <NavigationItem content="Página inicial" href="/" />
          <NavigationItem content="Enviar tweet" href="/tweet-sentiment" />
          <NavigationItem content="Tweets" href="/tweets" />
        </ul>
      </NavigationContent>
    </header>
  )
}
