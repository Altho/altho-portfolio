import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TopMenu from "../components/TopMenu/TopMenu";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="Altho" content="Altho's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <TopMenu />
      </main>


    </div>
  )
}

export default Home
