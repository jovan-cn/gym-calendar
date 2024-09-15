import { Record } from "../types/gym"
import dayjs from "dayjs";


interface RecordPanelProps {
  r: Record,
}
export const RecordPanel: React.FC<RecordPanelProps> = ({r}) => {
  return (
    <div className="text-sm">
      <h1 className="text-center font-bold">
        {dayjs(r.date).format("YYYY/MM/DD")}
      </h1>

      <p className="w-full text-right">
        {r.distance}
        <span className={`italic`}>km</span>
      </p>
      <p className="w-full text-right">
        {r.kCal}
        <span className={`italic`}>kCal</span>
      </p>
      {r.duration &&
        <p className="w-full text-right">
          {Math.floor(r.duration / 60)}
          <span className={`italic`}>m</span>
          {Math.floor(r.duration % 60)}
          <span className={`italic`}>s</span>
        </p>
      }
    </div>
  )
}