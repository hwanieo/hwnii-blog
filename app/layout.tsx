import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/ui/Header';
import Background from './ui/Background';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Background>
          <Header />
          {children}
        </Background>
      </body>
    </html>
  );
}
