export const metadata = {
	title: 'Keres',
	description: 'Firma Transportowa',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<link rel='shortcut icon' href='/static/favicon.ico' />

			<body>{children}</body>
		</html>
	)
}
