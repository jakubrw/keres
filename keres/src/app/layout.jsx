import 'leaflet/dist/leaflet.css'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'KERES - firma transportowa',
	description: 'Dobry interes z firmą keres!',
}
export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
