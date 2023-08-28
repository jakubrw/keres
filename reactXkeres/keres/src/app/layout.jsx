import './globals.css'
import "leaflet/dist/leaflet.css";
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KERES - transport',
  description: 'Dobry interes z firmą keres!',
}
export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>

    </html>
  )
}
