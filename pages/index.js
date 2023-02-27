import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>RDA Headless Accelerator</title>
        <meta name="description" content="Due to lack of interest, friction when even just attempting to push this forward, I'm tired of pushing on a noodle. Bye!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          Sorry, nobody&apos;s home. Please leave a message after the beep.
        </div>
      </main>
    </>
  )
}
