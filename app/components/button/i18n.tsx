'use client'
import React, { useRef, useState }  from "react"
import { PiTranslateLight  } from "react-icons/pi";
import { getLanguageLabel } from "@/app/util";
import {
	Locale,
	routing,
	usePathname,
	useRouter,
} from "@/app/i18n/routing";
import { buttonSytle } from ".";
import clsx from "clsx";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";


const I18nButton: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
	const [open, setOpen] = useState<boolean>(false);

	const changeLocale = (l: string) => {
		router.replace(
			pathname,
			{ locale: l as Locale }
		);
	}

	const ulRef = useRef<HTMLUListElement>(null);
	useOutsideClick(ulRef, () => setOpen(false));

	return (
		<div className={'relative'}>
			<button className={clsx(buttonSytle)} onClick={() => {
				setOpen(!open);
			}}>
				<PiTranslateLight />
			</button>

			{open && (
				<ul ref={ulRef} className={clsx(
					'absolute text-xs w-16 bg-slate-100 dark:bg-slate-700 rounded my-px',
				)}>
					{routing.locales.map((l: string, i: number) => {
						return (
							<li key={i} className={clsx(
								'hover:bg-slate-200 dark:hover:bg-slate-600 rounded py-1 px-2',
								'cursor-pointer',
							)}
								onClick={() => changeLocale(l)}>
								{getLanguageLabel(l)}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}

export default I18nButton;