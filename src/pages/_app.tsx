import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: '300',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Safesync AI</title>
        <meta name="description" content="Safesync AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${roboto.className} flex items-center justify-center bg-gray-200 h-screen w-screen`}>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </>
  )
}
