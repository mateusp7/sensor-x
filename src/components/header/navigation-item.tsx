"use client"

import { NavigationProps } from "@/lib/types/navigation-item-type"
import Link from "next/link"
import React from "react"
import { NavigationMark } from "./navigation-mark"
import { usePathname } from "next/navigation"

export const NavigationItem = ({
  content,
  href,
  className,
}: NavigationProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <div className="relative flex flex-col items-center justify-between  h-20">
      <Link
        href={href}
        className={`${className} font-medium tracking-wide ${
          isActive ? "text-primary-1" : "text-neutral-7"
        } my-auto`}
      >
        {content}
      </Link>
      <NavigationMark isActive={isActive} />
    </div>
  )
}
