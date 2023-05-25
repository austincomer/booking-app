import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
})

export const metadata = {
  title: 'Dune Skin | Booking',
  description: 'Book your spray tan appointment with Dune now!',
  openGraph: {
    title: 'Dune Skin | Booking',
    description: 'Book your spray tan appointment with Dune now!',
    url: 'https://austin-comer-booking-app.vercel.app/',
    siteName: 'Dune Skin | Booking',
    images: [
      {
        url: '/images/dune-2.png',
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
