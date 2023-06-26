import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ weight: "300", subsets: ['latin'] })

export const metadata = {
  title: 'The Stanley Hotel',
  description: 'Stanley Hotel In Estes Park, CO offers 4 types of hotel accommodations including 1909 historic hotel rooms, historic boutique hotel, modern hotel rooms, and 1 to 3 bedroom condominiums perfect for groups. Enjoy stunning views of the Rocky Mountains.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
			<link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={lato.className} >{children}</body>
    </html>
  )
}
