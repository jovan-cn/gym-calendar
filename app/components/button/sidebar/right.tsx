'use client'
import clsx from "clsx";
import { HiOutlineSearch } from "react-icons/hi";
import { useSidebarOpen } from "@/app/hooks/useSidebarOpen";
import { buttonSytle } from "..";


export default function RightMore() {
  const {open, setOpen} = useSidebarOpen();
  
  return (
    <button className={clsx( buttonSytle, 'md:hidden' )}
      onClick={() => { setOpen(!open); }
    }>
      <HiOutlineSearch />
    </button>
  )
}