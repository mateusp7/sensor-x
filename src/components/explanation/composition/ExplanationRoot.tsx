import { ReactNode } from "react"

export const ExplanationRoot = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col items-start">{children}</div>
}
