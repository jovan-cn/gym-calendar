'use client'
import clsx from "clsx";
import { ReactNode, useRef } from "react"
import { MdOutlineClose } from "react-icons/md";
import { useOutsideClick } from "../hooks/useOutsideClick";


interface DrawerProps {
  title?: string,
  children: ReactNode,
  open: boolean,
  onClose: () => void,
  position?: "top" | "bottom" | "left" | "right",
  size?: number,
}
export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    title,
    children,
    open = false,
    onClose,
    position = "right",
    size = 200,
  } = props;

  const handleClose = () => {
    onClose();
  }

  const drawerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(drawerRef, handleClose);

  return (
    <div ref={drawerRef} className={clsx(
      'fixed bg-slate-50 dark:bg-slate-800 text-sm',
      'transition-all ease-in-out duration-500',
      ["top", "bottom"].includes(position) ? "left-0" : "top-0",
    )} style={{
      [position]: open ? '0' : '-100%',
      width: ["top", 'bottom'].includes(position) ? '100vw' : size,
      height: ['left', 'right'].includes(position) ? '100vh' : size,
    }}>
      <div className={clsx("flex flex-col gap-2 p-4 justify-center")}>
        <div className={clsx(
          'flex  items-center',
          title ? 'justify-between' : 'justify-end',
        )}>
          {title && <p className="font-bold text-base">{title}</p>}
          <MdOutlineClose className={clsx(
            'cursor-pointer rounded-xl w-6 h-6 p-1',
            'hover:bg-slate-100 hover:dark:bg-slate-700'
          )} onClick={handleClose} />
        </div>

        {children}

      </div>
    </div>
  )
}