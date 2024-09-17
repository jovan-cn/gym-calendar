'server-only'
import favicon from '@/public/favicon.svg'

import Image from "next/image";
import React from "react"

const Logo: React.FC = () => {
  return (
    <Image 
      src={favicon}
      width={20}
      height={20} 
      alt="logo" />
  )
}
export default Logo;