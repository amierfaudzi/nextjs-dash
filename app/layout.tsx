import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* adding the Inter to the body will apply the font throughout the app */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
