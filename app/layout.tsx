import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IoT Security Update Checker — FCC Compliance Scanner',
  description: 'Scan your network for IoT devices, check firmware versions, and generate FCC compliance reports automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="22a625bb-e583-472d-a71c-daf8ccc12525"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
