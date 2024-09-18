'use client'
import { numArray } from "@/app/util";
import { 
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import dayjs from "dayjs";
import React, { ReactNode } from "react";
import { buttonSytle } from "../button";
import { Month } from "./month";
import { useYearContext } from "@/app/hooks/useYearContext";


interface Calendarprops {
  coloring(date: dayjs.Dayjs) : string | ReactNode | null,
}
export const Calendar: React.FC<Calendarprops> = ({coloring}) => {
  const { year, setYear } = useYearContext();

  const lastyear = () => { setYear(year - 1)}
  const nextyear = () => { setYear(year + 1)}

  return (
    <div className="flex flex-col m-4 text-slate-500 dark:text-slate-400">
      {/* toolbar */ }
      <div className="flex justify-between items-center text-center mb-4">
        <button className={`${buttonSytle}`} onClick={lastyear}>
          <HiOutlineArrowSmallLeft />
        </button>
        <h1 className={`text-center text-lg`}>{year}</h1>
        <button className={`${buttonSytle}`} onClick={nextyear}>
          <HiOutlineArrowSmallRight />
        </button>
      </div>

      {/* calendar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-6">
        {numArray(12).map((m: number, i: number) => {
          return <Month key={i} y={year} m={m} coloring={coloring} />
        })}
      </div>
    </div>
  )
}
