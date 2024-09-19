'use client'
import clsx from "clsx"
import React from "react"
import { useFormatter, useTranslations } from "next-intl"
import { useYearContext } from "@/app/hooks/useYearContext"
import { getMonthTimes, heatColor } from "@/app/util/statistic"
import { Tooltip } from "./tooltip"
import dayjs from "dayjs"

export const StatisticPanel = () => {
  const t = useTranslations("statistic")
  const { year } = useYearContext();
  const times = getMonthTimes(year);
  let total = 0;
  times.map((t:number) => {
    total += t;
  })

  return (
    <div className={clsx(
      'flex flex-col gap-2 p-2 rounded text-sm ',
      'border border-gray-200 dark:border-gray-700 ',
    )}>
      <p className="mb-1 text-base font-bold">{t('title')}</p>

      <Heatmap year={year} times={times} />

      <p>{t.rich('times_in_year', {
        times: total,
        year: year,
        time: (chunks) => <span style={{fontSize: '1.2rem', color:'orange'}}>{chunks}</span>,
      })}</p>
    </div>
  )
}


interface HeatmapProps {
  year: number,
  times: number[], 
}
const Heatmap: React.FC<HeatmapProps> = (props) => {
  const { year, times } = props;
  const t = useTranslations('statistic');
  const format = useFormatter();

  const hint = (m:number, c:number) => {
    const date = dayjs().year(year).month(m).toDate();

    return (
      <div className="text-sm text-right whitespace-nowrap">
        <p className="font-bold mb-2">
          {format.dateTime(date, {year:'numeric',month:'long'})}
        </p>

        <p>{t.rich('times_in_month', {
          times: c,
          span: (chunks) => <span style={{fontSize: '1.2rem', color:'orange'}}>{chunks}</span>,
        })}</p>
      </div>
    )
  }

  return (
    <div className={clsx('flex gap-px p-2')}>
      {times.map((t: number, i: number) => {
        const color = heatColor(t);
        return (
          <Tooltip key={i} content={hint(i, t)}>
            <div className={clsx(
              'w-2 h-2 rounded-[2px] ',
              color,
            )}></div>
          </Tooltip>
        )
      })}
    </div>
  )
}