import dayjs from "dayjs"
import { ReactNode, createContext, useContext, useState } from "react"


interface YearContextProps {
  year: number,
  setYear: Function,
}
const YearContext = createContext<YearContextProps>({
  year: 0,
  setYear: () => {},
})

export const YearProvider: React.FC<{ 
  children: string | ReactNode 
}> = (props) => {
  const { children } = props
  const [year, setYear] = useState(dayjs().year());

  return (
    <YearContext.Provider value={{ year, setYear }}>
      {children}
    </YearContext.Provider>
  )
}

export const useYearContext = () => {
  return useContext(YearContext);
}