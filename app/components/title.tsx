'use client'
import React from "react"
import { useTranslations } from 'next-intl'

const Title: React.FC = () => {
  const t = useTranslations()
  return <span>{t('header.title')}</span>
}

export  default Title;