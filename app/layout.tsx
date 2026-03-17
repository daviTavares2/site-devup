
import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Digital DevUp | Sites Profissionais que Transformam Negócios',
  description: 'Criamos sites profissionais, landing pages e e-commerces de alta performance. Transforme sua presença digital com a Digital DevUp.',
  keywords: ['sites profissionais', 'landing page', 'e-commerce', 'desenvolvimento web', 'Digital DevUp', 'criação de sites'],
  authors: [{ name: 'Digital DevUp' }],
  openGraph: {
    title: 'Digital DevUp | Sites Profissionais',
    description: 'Transforme seu negócio com um site profissional de alta performance.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#381780',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
