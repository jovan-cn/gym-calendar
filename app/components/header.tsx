'server-only'
import React from "react";
import I18nButton from "@/app/components/button/i18n";
import ThemeButton from "@/app/components/button/theme";
import Title from "@/app/components/title";
import Logo from "@/app/components/logo";
import Navbar from "@/app/components/navbar";
import RightMore from "@/app/components/button/sidebar/right";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 h-12 w-full px-4 sm:px-12 md:px-0 md:w-3/5 lg:w-2/5 z-1 backdrop-blur-3xl bg-opacity-80 flex flex-row justify-between items-center ">
      <div className="flex flex-row gap-2 font-bold">
        <Logo />
        <Title />
      </div>

      <Navbar />

      <div className={`flex flex-row gap-1`}>
        <I18nButton />
        <ThemeButton />
        <RightMore />
      </div>
    </header>
  )
}