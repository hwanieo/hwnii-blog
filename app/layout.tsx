import type { Metadata } from 'next';
import '@/app/ui/globals.css';

import { nunito } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'hwnii blog',
  description: 'hwnii 개인 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
