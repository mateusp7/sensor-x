import { NavigationContentProps } from "@/lib/types/navigation-content.type"
import { forwardRef } from "react"

export const NavigationContent = forwardRef<
  HTMLElement,
  NavigationContentProps
>(({ className, children }, ref) => (
  <nav ref={ref} className={className}>
    {children}
  </nav>
))

NavigationContent.displayName = "NavigationContent"
