import dayjs from "dayjs"
import React from "react"
import { Linker } from "./linker"
import { PiGithubLogoBold } from "react-icons/pi"
import { GrMailOption } from "react-icons/gr";
import clsx from "clsx"
import { Email, Github, Homepage } from "@/app/util/const"


export const Footer: React.FC = () => {
  return (
    <footer className={clsx(
      'text-slate-300 dark:text-slate-700 text-center text-sm h-12',
      "w-full sm:w-2/5 px-4 sm:px-0",
      'flex flex-col-reverse sm:flex-row justify-between items-center gap-1',
    )}>

      <div>Copyright @{dayjs().year()} <Linker href={Homepage}>Jovan</Linker>. All rights reserved.</div>

      <div className="flex gap-2">
        <Linker href={Github}>
          <PiGithubLogoBold />
        </Linker>
        <Linker href={"mailto:"+Email}>
          <GrMailOption />
        </Linker>
      </div>
    </footer>
  )
}