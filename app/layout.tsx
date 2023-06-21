import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'UI Car Shop',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'></link>
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
