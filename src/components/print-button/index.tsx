'use client'

import Button from "@/components/form/ui/button"
import { ButtonHTMLAttributes } from "react"

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'> & {
  elementId: string,
  ignoreElements?: string[]
}

const PrintButton = ({ children, elementId, ignoreElements, ...buttonProps }: Props) => {
  const handleClick = async () => {
    const print = (await import("print-js")).default
    print({
      printable: elementId,
      type: "html",
      targetStyles: ["*"],
      ignoreElements,
    });
  }

  return (
    <Button type="button" onClick={handleClick} {...buttonProps}>{children}</Button>
  )
}

export default PrintButton
