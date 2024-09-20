'use client'
import { ReactNode, createContext, useContext, useState } from "react";


interface SidebarOpenProps {
  open: boolean,
  setOpen: (v: boolean) => void,
}
const SidebarOpenContext = createContext<SidebarOpenProps>({
  open: false,
  setOpen: () => {},
})



export const SidebarOpenProvider: React.FC<{
  children: ReactNode,
}> = (props) => {
  const { children } = props;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <SidebarOpenContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarOpenContext.Provider>
  )
}

export const useSidebarOpen = () => {
  return useContext(SidebarOpenContext);
}

