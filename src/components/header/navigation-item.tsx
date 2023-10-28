"use client"

import { NavigationProps } from "@/lib/types/navigation-item-type"
import { usePathname, useRouter } from "next/navigation"
import { NavigationMark } from "./navigation-mark"

export const NavigationItem = ({
  content,
  href,
  className,
  handleClickLink,
}: NavigationProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = pathname === href

  const handleGoToPage = () => {
    router.push(href)
    handleClickLink?.()
  }

  return (
    <button
      onClick={handleGoToPage}
      className={`h-20  relative flex flex-col items-center justify-center font-medium tracking-wide ${className} ${
        isActive ? "text-primary-1" : "text-neutral-7"
      } `}
    >
      {content}
      <NavigationMark isActive={isActive} />
    </button>
  )
}
