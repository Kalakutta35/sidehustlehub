import './globals.css'

export const metadata = {
  title: 'Side Hustle Hub',
  description: 'Best side hustles and online income ideas by profession',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}