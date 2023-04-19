'use client'

import Button from "@/components/form/ui/button"
import print from 'print-js'
import { ButtonHTMLAttributes } from "react"

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'> & {
  elementId: string
}

const PrintButton = ({ children, elementId, ...buttonProps }: Props) => {
  const handleClick = () => {
    print({ printable: elementId, type: 'html' })
  }

  return (
    <Button type="button" onClick={handleClick} {...buttonProps}>{children}</Button>
  )
}

export default PrintButton
