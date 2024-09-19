import data from '@/data/record.json'
import dayjs from 'dayjs'
import { Record } from '../types/gym'

export const getMonthTimes = (year: number) => {
  let ret = Array.from({length: 12}, (_, i) => 0);

  ret.map((_: number, m:number) => {
    const month = dayjs().year(year).month(m);
    const first = month.date(1);
    const last  = month.date(month.daysInMonth())

    data.map((d: Record, _: number) => {
      if (first.format("YYYY-MM-DD") <= d.date && d.date <= last.format("YYYY-MM-DD")) {
        ret[m]++;
      }
    })
  })

  return ret;
}


export const heatColor = (h: number) => {
  switch(h) {
    case 0: return 'bg-slate-200 dark:bg-slate-700';
    case 1: return 'bg-orange-200';
    case 2: return 'bg-orange-300';
    case 3: return 'bg-orange-400';
    case 4: return 'bg-orange-500';
    case 5: return 'bg-orange-600';
    case 6: return 'bg-orange-700';
    case 7: return 'bg-orange-800';
    default: return 'bg-orange-900';
  }
}