import { MotionCalendar } from "@/app/components/calendar/motion";
import { YearProvider } from "@/app/hooks/useYearContext";
import { StatisticPanel } from "@/app/components/statistic";
import { Sidebar } from "@/app/components/sidebar";

export default function Home() {

  return (
    <YearProvider>
      <div className="relative">
        <MotionCalendar />

        <Sidebar>
          <StatisticPanel />
        </Sidebar>
      </div>
    </YearProvider>
  )
}
