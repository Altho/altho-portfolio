import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useRef } from 'react'
import {useScroll, useTransform} from 'framer-motion'
// import { HeaderResponsive } from '../Components/Header'
import { AboutMe } from '../Components/Introduction'
import { Presentation } from '../Components/presentation'
import styles from '../styles/Home.module.css'
import { useViewportSize } from '@mantine/hooks'
import Proficiencies from '../Components/Proficiencies'


const Home: NextPage = () => {
    const links = [
            {
                "link": "/about",
                "label": "Features"
            },
            {
                "link": "/pricing",
                "label": "Pricing"
            },
            {
                "link": "/learn",
                "label": "Learn"
            },
            {
                "link": "/community",
                "label": "Community"
            }
        ]

    const ref = useRef(null);

    const { scrollY } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const { height, width } = useViewportSize();

    console.log(height, width)

    const opacity = useTransform(scrollY, [0, 100], [1,0]);
    const rocketMovement = useTransform(scrollY, [0, 500], [-500, width]);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            console.log(latest)

        })
    }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="Altho" content="Altho's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/*<HeaderResponsive links={links}/>*/}

      <main className={styles.main}>
        <Presentation opacity={opacity} rocketMovement={rocketMovement}/>
         <AboutMe/>
          <h1> Proficiencies</h1>
          <Proficiencies/>


      </main>


    </div>
  )
}

export default Home
