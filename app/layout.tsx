import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Second Spliff | Podcast • Events • Culture',
  description: 'Windsor\'s premier platform for underground artists. Podcast episodes, live events, and a community built for real ones.',
  keywords: ['Windsor', 'podcast', 'music', 'culture', 'underground', 'artists', 'Ontario', 'hip hop'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
