import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KEKW',
  description: 'Emotes for HLTV!'
}

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: 'black' }}>
        <KumaRegistry>{children}</KumaRegistry>
      </body>
    </html>
  )
}

export default RootLayout
