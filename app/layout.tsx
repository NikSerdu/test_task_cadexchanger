import '@/app/globals.css'
import Layout from './_components/Layout/Layout'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
