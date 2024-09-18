'use client'
import { MotionCalendar } from "@/app/components/calendar/motion";
import { YearProvider } from "../hooks/useYearContext";

export default function Home() {
  return (
    <YearProvider>
      <div className="relative">
        <MotionCalendar />

        <aside className="hidden md:inline-block fixed absolute top-20 -right-[30%] bg-slate-400 h-60 w-20">
          side
        </aside>
      </div>
    </YearProvider>
  )
}
