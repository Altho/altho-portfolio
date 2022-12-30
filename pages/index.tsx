import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import {HeaderResponsive} from '../Components/Header'
import {AboutMe} from '../Components/Introduction'
import {Presentation} from '../Components/presentation'
import styles from '../styles/Home.module.css'
import {useViewportSize} from '@mantine/hooks'
import Proficiencies from '../Components/Proficiencies'
import {Container} from '@mantine/core'
import Projects from '../Components/Projects'


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

    const {scrollY} = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const {height, width} = useViewportSize();

    console.log(height, width)

    const opacity = useTransform(scrollY, [0, 100], [1, 0]);
    const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            console.log(bgOpacity)

        })
    }, [])


    return (
        <Container size={"xl"}>
            <motion.div>
                <Head>
                    <title>Create Next App</title>
                    <meta name="Altho" content="Altho's portfolio"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <HeaderResponsive links={links}/>

                <main className={styles.main}>
                    <Presentation opacity={opacity}/>
                    <AboutMe/>
                    <Container className={styles.sectionContainer} size="lg">

                        <Proficiencies/>
                    </Container>
                    <Container className={styles.sectionContainer} size="lg">

                        <Projects/>
                    </Container>


                </main>

            </motion.div>
        </Container>
    )
}

export default Home
