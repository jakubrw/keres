import 'leaflet/dist/leaflet.css'
import './globals.css'

export const metadata = {
	title: 'KERES - firma transportowa',
	description: 'Dobry interes z firmą keres!',
}
export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body>{children}</body>
		</html>
	)
}
