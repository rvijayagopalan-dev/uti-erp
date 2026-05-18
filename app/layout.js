import './globals.css'

export const metadata = {
  title: {
    default: 'UTI Evolution — Unified Theory of Intelligence',
    template: '%s | UTI Evolution',
  },
  description: 'The roadmap from domain-specific intelligence to a Universal Theory of Intelligence — 10 stages of the Eternal Research Program, 7 UAIF pillars, convergence map, taxonomy, and research thesis.',
  keywords: ['Unified Theory of Intelligence', 'UTI', 'UAIF', 'adaptive intelligence', 'ELG', 'eternal learning graph', 'intelligence theory', 'AI research'],
  authors: [{ name: 'Vijayagopalan Raveendran', url: 'https://www.linkedin.com/in/rvijayagopalan' }],
  creator: 'Vijayagopalan Raveendran',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uti-evolution.vercel.app',
    title: 'UTI Evolution — Unified Theory of Intelligence',
    description: 'From domain-specific AI to a Universal Theory of Intelligence — 10 stages, 7 UAIF pillars, convergence map, taxonomy, and full research thesis.',
    siteName: 'UTI Evolution',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTI Evolution — Unified Theory of Intelligence',
    description: 'From domain-specific AI to a Universal Theory of Intelligence — 10 stages, 7 UAIF pillars, convergence map, taxonomy.',
    creator: '@rvijayagopalan',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
