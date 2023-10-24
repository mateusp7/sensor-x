import { NavigationContentProps } from "@/lib/types/navigation-content.type"

export const NavigationContent = ({ children }: NavigationContentProps) => {
  return <nav>{children}</nav>
}
