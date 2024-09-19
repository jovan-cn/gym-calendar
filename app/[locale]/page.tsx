'use client'
import { MotionCalendar } from "@/app/components/calendar/motion";
import { YearProvider } from "../hooks/useYearContext";
import { StatisticPanel } from "../components/statistic";

export default function Home() {
  return (
    <YearProvider>
      <div className="relative">
        <MotionCalendar />

        <aside className="md:inline-block fixed absolute top-20 -right-[40%] ">
          <StatisticPanel />
        </aside>
      </div>
    </YearProvider>
  )
}
