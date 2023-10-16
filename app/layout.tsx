import './globals.css'
import type { Metadata } from 'next'
import FacebookPixel from '@/components/FacebookPixel'
import { inter } from './fonts'
import { Toaster } from '@/components/ui/toaster'


export const metadata: Metadata = {
  title: 'IgrowMyBiz',
  description: 'Digital Marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster/>
        <FacebookPixel />
      </body>
    </html>
  )
}
