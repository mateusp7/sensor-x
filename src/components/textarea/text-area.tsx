"use client"

import { TextAreaProps } from "@/lib/types/text-area-type"

export const TextArea = ({
  ...props
}: TextAreaProps & React.InputHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <textarea
        className={`border-2 resize-none  font-medium placeholder:text-base text-neutral-7 rounded-lg bg-transparent outline-none  w-full h-36 p-6  transition-colors duration-100 ease-linear ${
          props.error
            ? "border-alerts-error placeholder:text-alerts-error hover:border-alerts-error focus:border-alerts-error"
            : "border-neutral-3 placeholder:text-neutral-4 hover:border-primary-1 focus:border-primary-1"
        }`}
        placeholder={props.placeholder || "Escreva aqui..."}
        {...props}
      />
      {props.error?.message && (
        <span className="text-alerts-error font-medium tracking-wide text-sm">
          {props.error.message}
        </span>
      )}
    </div>
  )
}
