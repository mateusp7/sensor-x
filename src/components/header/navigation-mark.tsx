import { NavigationMarkProps } from "@/lib/types/navigation-mark.type"

export const NavigationMark = ({ isActive }: NavigationMarkProps) => {
  return (
    <div
      className={`absolute bottom-0 hidden md:flex  bg-primary-1 w-1/2 h-2 rounded-t-xl transition-opacity duration-200 ease-linear ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    />
  )
}
