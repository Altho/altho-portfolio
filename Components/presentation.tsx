import styles from '../styles/Home.module.css'
import {motion, useScroll, useTransform} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {createStyles, Image } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';


const useStyles = createStyles((theme) => ({
    rocket: {
        position: 'absolute',
        left: '-500px',
        top: '20vh',
        transform: 'rotate(160deg)',

    },

}));

// @ts-ignore
export function Presentation({opacity, rocketMovement}) {
    const { classes } = useStyles();


    const Altho = () => {
        const [content, setContent] = (useState('Altho'));
        return (
            <div>

            <motion.div
                className={styles.altho}
            onHoverStart={() => setContent('Alan Thomas')}
            onHoverEnd={() => setContent('Altho')}
            whileHover={{
                rotateY: 360,

            }}
                whileTap={{ scale: 0.9 }}
            >
                <a>{content}</a>
           </motion.div>
            </div>
        )
    }



    return (
        <div>
            <motion.div
                style={{
                    x: rocketMovement,
                    y: rocketMovement,
                    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) "
                }}
            >
                <Image
                    className={classes.rocket}
                    src="./bg_images/ship.svg"
                    width={200}

                ></Image>
            </motion.div>
        <motion.div
            style={{ opacity: opacity}}
            className={styles.title}
        >
        <h1>
            Hello, I am <Altho/>
        </h1>
            <div>I like to solve problems</div>
        </motion.div>
        </div>
    )
}
