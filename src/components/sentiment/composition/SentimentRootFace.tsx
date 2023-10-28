import { ReactNode } from "react"

export const SentimentRootFace = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <li className={`${className}`}>{children}</li>
}
