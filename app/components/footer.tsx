import dayjs from "dayjs"
import React from "react"

export const Footer: React.FC = () => {
  return (
    <footer className={`text-slate-300 dark:text-slate-700 text-center text-sm h-12 p-2`}>
      Copyright @{dayjs().year()} Jovan. All rights reserved.
    </footer>
  )
}
