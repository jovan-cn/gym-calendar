'use client'
import React, { useEffect, useState } from "react"
import { PiMonitorBold,  PiSunFill, PiMoonFill } from "react-icons/pi";
import { Theme, toggleTheme, updateTheme } from "@/app/util/theme"
import { buttonSytle } from ".";


const ThemeButton: React.FC = () => {
	const [theme, setTheme] = useState<Theme>()

	useEffect(() => {
		if (localStorage.theme !== undefined) {
			setTheme(localStorage.theme)
		}
		updateTheme()
	}, [])

	const changeTheme = () => {
		const newTheme = toggleTheme()
		setTheme(newTheme)
	}

	return (
		<button className={`${buttonSytle}`} onClick={changeTheme}>
			{ theme === Theme.light ? <PiSunFill />
			: theme === Theme.dark  ? <PiMoonFill /> 
															: <PiMonitorBold />
			}
		</button>
	)
}

export default ThemeButton;