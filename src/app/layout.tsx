'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import NotificationBar from './components/NotificationBar/NotificationBar';
import Header from './components/Header/Header';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './react-query.client';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <main className='flex min-h-screen flex-col items-center p-0'>
            <NotificationBar />
            <Header />
            <BreadCrumb
              breadCrumbs={[
                {
                  label: 'Home',
                  path: '/',
                },
                {
                  label: 'Home2',
                  path: '/2',
                },
              ]}
            />
            {children}
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
