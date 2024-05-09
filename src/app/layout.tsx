import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import ActiveSectionContextProvider from './context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anthony | Portfolio',
  description: 'anthony is try doing good',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      {/* <body className={`${inter.className} bg-gray-50 relative`}> */}
      <body className='bg-gray-50 relative'>
      <div className='bg-[#50f9e8] absolute -z-10 top-[9rem] left-[20%] h-[20.25rem] w-[12.25rem] xl:w-[20.25rem] rounded-full blur-[10rem]' />
      <div className='bg-[#fed1f4] absolute -z-10 top-[-1rem] right-[50%] h-[20.25rem] w-[12.25rem] xl:w-[20.25rem] rounded-full blur-[10rem]' />
        <ActiveSectionContextProvider>
        <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
