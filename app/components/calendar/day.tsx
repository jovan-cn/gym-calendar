import clsx from "clsx";
import { Tooltip } from "@/app/components/tooltip";
import dayjs from "dayjs";
import { ReactNode } from "react";
import { firstDayColStart } from "@/app/util";


interface DayProps {
  date: dayjs.Dayjs,
  coloring(day: dayjs.Dayjs) : string | ReactNode | null,
}
export const Day: React.FC<DayProps> = ({date, coloring}) => {
    const gridColStartStyle = firstDayColStart(date.date(1).day())
    const d = coloring(date);

  return (
    <Tooltip content={d} >
      <div className={clsx(
        'hover:cursor-default',
        'w-4 h-4 border rounded text-xs text-center ',
        d === null && 'border-slate-300 dark:border-slate-700',
        d != null && ' bg-cyan-400 dark:bg-cyan-600 text-slate-500 dark:text-slate-200 border-slate-400 dark:border-slate-600 ',
        date.date() == 1 && gridColStartStyle,
      )}>
        {date.date()}
      </div>
    </Tooltip>
  )
}