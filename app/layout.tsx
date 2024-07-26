import type { Metadata } from 'next';
import '@/app/ui/globals.css';
import Background from '@/app/ui/background';
import Header from '@/app/ui/header';

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
      <body className={`${nunito.className} antialiased`}>
        <Background>
          <Header />
          {children}
        </Background>
      </body>
    </html>
  );
}
