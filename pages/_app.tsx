import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { Metadata } from 'next'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Itim } from 'next/font/google'
import Layout from '@/components/Layout'

const itim = Itim({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'The Cocktail DB',
  description: 'An open, crowd-sourced database of drinks and cocktails from around the world.',
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <main className={itim.className}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </main>
  )
}
