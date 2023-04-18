'use client'

import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"
import FormElement from "../form-element"

type Props = InputHTMLAttributes<HTMLInputElement> & Omit<UseFormRegisterReturn, 'ref'> & {
  label: string,
  error?: FieldError
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, error, ...inputProps }, ref) => (
  <FormElement label={label} error={error?.message}>
    <input className="w-full rounded-md border-2 border-black shadow-2 px-2 py-1 focus-visible:outline-none focus-visible:border-orange-700" {...inputProps} ref={ref} />
  </FormElement>
))

Input.displayName = 'Input'

export default Input
