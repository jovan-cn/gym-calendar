'use client'
import records from '@/data/record.json'
import { Record } from "@/app/types/gym";
import { getRecord } from "@/app/util";
import dayjs from "dayjs";
import { Calendar } from '.';
import { RecordPanel } from '@/app/components/record';

export const MotionCalendar = () => {
  const coloring = (date: dayjs.Dayjs) => {
    const r: Record | null = getRecord(records, date.format("YYYY-MM-DD"))
    return r === null ? null : <RecordPanel r={r} />;
  }
  return <Calendar coloring={coloring}/>
}