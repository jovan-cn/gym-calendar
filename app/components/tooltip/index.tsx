import clsx from "clsx"
import { ReactNode } from "react"

const tooltip_position = 'absolute -translate-x-1/2 left-1/2';

export interface TooltipProps {
  content: string | ReactNode,
  children: ReactNode,
}
export const Tooltip: React.FC<TooltipProps> = (props) =>{
  const { content, children } = props

  if (content === null) return children;

  return (
    <div className={clsx('hover:relative group')}>
      <div className={`hidden group-hover:inline-block rounded 
        bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-400
        p-2 z-10 ${tooltip_position} bottom-[150%]
      `}>
        <div className={clsx(
          'w-0 h-0 -bottom-4',
          'border-8 border-x-transparent border-b-transparent',
          'border-t-slate-200 dark:border-t-slate-700',
          tooltip_position,
        )}></div>
        {content}
      </div>

      {children}
    </div>
  )
}