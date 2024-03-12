import type { Metadata } from 'next';

import { HighlightInit } from '@highlight-run/next/client';
import { Inter } from 'next/font/google';

import { classMerge } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tennis-Court Booking App',
  description: 'Made with <3 by João Pedro Aquino',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HighlightInit
        projectId={'5g5x1wld'}
        serviceName="my-nextjs-frontend"
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
      />
      <html lang="en">
        <body className={classMerge('min-h-screen bg-background antialiased', inter.className)}>
          {children}
        </body>
      </html>
    </>
  );
}
