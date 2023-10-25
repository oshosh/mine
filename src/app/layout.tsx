import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PropsWithChildren } from 'react';
import { env } from '@/env.mjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: env.NEXT_PUBLIC_APP_URL === 'production' ? '오세현 | front-end developer' : 'local12',
  description: '오세현 | front-end developer 포트폴리오',
  keywords: ['프론트엔드, FE, React, Vue, Next.js, front-end'],
  icons: {
    icon: '/public/favicon.ico',
  },
  openGraph: {
    type: 'website',
    title: '프론트엔드 개발자 오세현 포트폴리오',
    description: '안녕하세요. 프론트엔드 개발자 오세현 포트폴리오 입니다.',
    images: '/lilac-bg.jpg',
  },
  appleWebApp: {
    title: '오세현 | front-end developer portfolio',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
