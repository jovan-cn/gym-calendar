'use client'
import React from "react"
import { Link, usePathname } from "@/app/i18n/routing";
import { useTranslations } from 'next-intl'
import clsx from "clsx";

const navs: string[] = [
  '/',
]

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const t = useTranslations('nav')

  if (navs.length < 2) return ;
  return (
    <nav className={clsx(
      'flex flex-row justify-start items-center gap-3 ',
      'w-40 overflow-x-scroll no-scrollbar'
    )}>
      {navs.map((n: string, i: number) => {

        return (
          <Link key={i} href={n} className={clsx(
            'hover:underline decoration-teal-400 decoration-2 ',
            'transition duration-3000 ease-in-out text-sm',
            { 'text-teal-400': pathname === n })}
          >
            {t(n)}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar;