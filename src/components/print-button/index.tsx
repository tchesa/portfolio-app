'use client'

import Button from "@/components/form/ui/button"
import { ButtonHTMLAttributes, useEffect } from "react"

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'>

const hideElements = () => {
  document.querySelector('header')?.classList.add('print-hidden');
  document.querySelectorAll('.resume-outside').forEach(element => element.classList.add('print-hidden'))
  document.querySelector('.print-container')?.classList.add('print-hidden');
}

const showElements = () => {
  document.querySelector('header')?.classList.remove('print-hidden');
  document.querySelectorAll('.resume-outside').forEach(element => element.classList.remove('print-hidden'))
  document.querySelector('.print-container')?.classList.remove('print-hidden');
}

const PrintButton = ({ children, ...buttonProps }: Props) => {
  useEffect(() => {
    window.addEventListener('beforeprint', hideElements);
    window.addEventListener('afterprint', showElements);

    return () => {
      window.removeEventListener('beforeprint', hideElements);
      window.removeEventListener('afterprint', showElements);
    }
  }, [])

  const handleClick = async () => {
    print();
  }

  return (
    <Button type="button" onClick={handleClick} {...buttonProps}>{children}</Button>
  )
}

export default PrintButton
