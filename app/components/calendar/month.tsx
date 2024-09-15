import { numArray, } from "@/app/util";
import { useFormatter } from "next-intl";
import dayjs from "dayjs";
import { Day } from "@/app/components/calendar/day";
import { ReactNode } from "react";


interface MonthProps {
  y: number,
  m: number,
  coloring(date: dayjs.Dayjs) : string | ReactNode | null,
}
export const Month: React.FC<MonthProps> = (props) => {
  const { y, m, coloring } = props;

  const nday = dayjs().year(y).month(m).daysInMonth();
  const format = useFormatter();

  return (
    <div className="flex flex-col">
      <h2 className={`text-center mb-1`}>
        {format.dateTime(dayjs().year(y).month(m).toDate(), {month: 'long'})}
      </h2>

      <div className={`grid grid-cols-7 gap-1`}>
        {numArray(7).map((_: number, i: number) => {
          return (
            <div key={i} className={`text-xs text-center`}>
              {format.dateTime(dayjs().day(i).toDate(), {weekday: 'narrow'})}
            </div>
          )
        })}

        {numArray(nday).map((d: number, i: number) => {
          const day = dayjs().year(y).month(m).date(d+1);
          return <Day key={i} date={day} coloring={coloring} />
        })}
      </div>
    </div>
  )
}
