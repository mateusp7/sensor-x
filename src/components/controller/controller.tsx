"use client"

import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form"

export const ControllerContainer = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return <Controller {...props} />
}
