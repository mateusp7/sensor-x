import { ReactNode } from "react"

export const SentimentRoot = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <main
      className={`${className} border-2 hover:border-primary-1 transition-colors duration-100 ease-linear border-neutral-3 rounded-lg px-5 py-6 flex flex-col gap-2`}
    >
      {children}
    </main>
  )
}
