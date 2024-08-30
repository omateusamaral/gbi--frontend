import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NotificationBar from './components/NotificationBar/NotificationBar';
import Header from './components/Header/Header';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GBI Ecommerce',
  description: 'test for GBI Group',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
