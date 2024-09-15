import { unstable_setRequestLocale } from "next-intl/server";
import { MotionCalendar } from "../components/calendar/motion";

export default function Home({
  params: {locale}
}: Readonly<{
  params: {locale: string};
}>) {
  unstable_setRequestLocale(locale)
  return <MotionCalendar />
}
