'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import NotificationBar from './components/NotificationBar/NotificationBar';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './react-query.client';
import { CartContextProvider } from './contexts/cart/CartContextProdvider';

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
          <CartContextProvider>
            <main className='flex min-h-screen flex-col items-center p-0'>
              <NotificationBar />
              {children}
            </main>
          </CartContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
