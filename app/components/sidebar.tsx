'use client'
import clsx from "clsx";
import React, { ReactNode } from "react";
import { Drawer } from "./drawer";
import { useSidebarOpen } from "@/app/hooks/useSidebarOpen";


interface SidebarProps {
  children: ReactNode,
  position?: "left" | "right",
}
export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { children, position = "right" } = props;

  const { open, setOpen } = useSidebarOpen()

  return (
    <>
      {/* PC */}
      <aside className={clsx(
        'hidden md:inline-block fixed absolute top-10 pl-12 pt-4',
        position === 'right' ? 'translate-x-full' : '-translate-x-full',
      )} style={{
        [position]: '-60px',
      }}>
        {children}
      </aside>

      {/* Mobile, works with button in header */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        {children}
      </Drawer>
    </>
  )
}