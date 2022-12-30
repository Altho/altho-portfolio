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
export function Presentation({opacity}) {
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
