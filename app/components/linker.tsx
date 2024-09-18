import clsx from "clsx"
import React, { ReactNode } from "react"


interface LinkerProps {
  children: string | ReactNode,
  className?: string,
  href: string,
}
export const Linker: React.FC<LinkerProps> = (props) => {
  const { children, className, href } = props
  return (
    <a href={href} target="_blank" className={clsx(
      className,
      'cursor-pointer hover:text-slate-400',
    )}>
      {children}
    </a>
  )
}