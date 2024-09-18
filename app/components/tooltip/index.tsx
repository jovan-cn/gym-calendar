import clsx from "clsx"
import { ReactNode } from "react"

export interface TooltipProps {
  content: string | ReactNode,
  children: ReactNode,
  position?: "left" | "right" | "top" | "bottom",
}
export const Tooltip: React.FC<TooltipProps> = (props) =>{
  const { content, children, position = "top" } = props

  if (content === null) return children;

  return (
    <div className={clsx('hover:relative group ')}>
      <div className={clsx(
        'absolute p-2 z-10 ',
        'hidden group-hover:inline-block rounded',
        'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-400',
        position === 'top' && '-translate-x-1/2 left-1/2 -top-2 -translate-y-full',
        position === 'bottom' && ' -translate-x-1/2 left-1/2 -bottom-2 translate-y-full',
        position === 'left' && ' -translate-y-1/2 top-1/2 -left-2 -translate-x-full',
        position === 'right' && ' -translate-y-1/2 top-1/2  -right-2 translate-x-full',
      )}>
        <div className={clsx(
          'w-0 h-0 absolute border-8',
          position === 'top' && '-translate-x-1/2 left-1/2 -bottom-4 border-x-transparent border-b-transparent border-t-slate-200 dark:border-t-slate-700',
          position === 'bottom' && '-translate-x-1/2 left-1/2 -top-4 border-x-transparent border-t-transparent border-b-slate-200 dark:border-b-slate-700',
          position === 'left' && '-translate-y-1/2 top-1/2 -left-4 border-y-transparent border-l-transparent border-r-slate-200 dark:border-r-slate-700',
          position === 'right' && '-translate-y-1/2 top-1/2 -right-4 border-y-transparent border-r-transparent border-l-slate-200 dark:border-l-slate-700',
        )}></div>
        {content}
      </div>

      {children}
    </div>
  )
}