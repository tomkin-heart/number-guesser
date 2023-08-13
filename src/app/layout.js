import './globals.css'
export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body className='theme-light'>{children}</body>
		</html>
	)
}
