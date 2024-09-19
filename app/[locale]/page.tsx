'use client'
import { MotionCalendar } from "@/app/components/calendar/motion";
import { YearProvider } from "../hooks/useYearContext";
import { StatisticPanel } from "../components/statistic";
import { useState } from "react";
import { Drawer } from "../components/drawer";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <YearProvider>
      <div className="relative">
        <button className={"w-12 h-8 text-center rounded bg-cyan-300 text-white"} onClick={() => {
          setOpen(!open);
        }}>
          More
        </button>
        <MotionCalendar />

        {/*<aside className="md:inline-block fixed absolute top-20 -right-[40%] ">*/}
        <Drawer title="More" open={open} onClose={() => setOpen(false)}>
          <StatisticPanel />
        </Drawer>
        {/*</aside>*/}
      </div>
    </YearProvider>
  )
}
