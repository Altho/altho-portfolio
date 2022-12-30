import { createStyles, Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import {MotionValue, useInView, useTransform } from "framer-motion"
import { motion } from "framer-motion"
import { useRef } from 'react';




const useStyles = createStyles((theme) => ({
    main: {
        height: '100vh',
        padding: '20px',
        marginTop: '20px',
        marginBottom: '50px',
        backdropFilter: 'blur(10px)',
        lineHeight: 2.5,
        fontSize: '1.2rem',
        textAlign: 'justify'

    },

}));

export function AboutMe() {
    const ref = useRef(null)
    const isInView = useInView(ref);
    const { classes } = useStyles();

    return (

        <Container>
        <motion.div
            ref={ref}
            className={classes.main}
            style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}


        >I am a fullstack web developper originally from France. I like that web development helps me solve all kind of problems. I mainly use Node.js (with Typescript) on the backend although I'm always curious
        about new languages (I have recently been experimenting with Rust !) and technologies. On the frontend I usually use React but I have been using other libraries (my current job uses Angular.js). In the end
            I'm pretty good at adapting and learning whatever tool is required to get the job done. I made sure to learn the basics of web development (HTML, CSS, Javascript) before diving into frameworks and libraries in order to allow
            for more transversality. I also have a good understanding of databases and I have been using SQL and NoSQL databases for a while now.
        </motion.div>
        </Container>
        )
}
