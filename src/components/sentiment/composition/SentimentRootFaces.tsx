import { ReactNode } from "react"

export const SentimentRootFaces = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <ul className={`flex gap-4 ${className}`}>{children}</ul>
}
