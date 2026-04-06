import type { Metadata } from 'next'
import { Archivo_Narrow, Archivo, Fragment_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'

const archivoNarrow = Archivo_Narrow({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500'],
})

const fragmentMono = Fragment_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Jomil Shah — Graphic Designer',
  description:
    'Jomil Shah is a versatile print and digital graphic designer based in Edmonton, AB — crafting brand identities, packaging, publications, and visual systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivoNarrow.variable} ${archivo.variable} ${fragmentMono.variable}`}
    >
      <body className="min-h-screen" style={{ fontFamily: 'var(--font-display), sans-serif' }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
