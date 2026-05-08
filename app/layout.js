import './globals.css'

export const metadata = {
  title: 'SideHustleHub',
  description:
    'Discover side hustles, passive income ideas and remote jobs by profession.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
