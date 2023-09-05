import './globals.css'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import { Poppins } from 'next/font/google'

const karla = Karla({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'The Cocktail DB',
  description: 'An open, crowd-sourced database of drinks and cocktails from around the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
