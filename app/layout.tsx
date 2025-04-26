import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import AnimatedBtn from './components/Btn'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Работа для девушек в эскорте за границей от Soprano Escort',
  description: 'Работа для девушек в эскорте за границей. Эскорт вакансии по странам. Эскорт агентства для девушек по сему миру. Лучшие условия и предложения',
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    images: '',
    title: 'Работа для девушек в эскорте за границей от Soprano Escort',
    description: 'Работа для девушек в эскорте за границей. Эскорт вакансии по странам. Эскорт агентства для девушек по сему миру. Лучшие условия и предложения',
    url: 'https://www.sopranoescort.com/',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <AnimatedBtn />
      </body>
    </html>
  );
}
