import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PAKT - Suppression de Compte',
  description: 'Demande de suppression de compte PAKT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
