import {createStyles, SimpleGrid } from '@mantine/core';
import {motion, MotionValue, useInView, useTransform } from "framer-motion"
import { useRef } from 'react';
import { data } from '../projectsData';
import ProficiencyCard from './ProficiencyCard';
import ProjectCard from './ProjectCard';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';


const useStyles = createStyles((theme) => ({
    title: {
        lineHeight: 1.2,
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 0',
    },


}));


export default function Projects () {
    const ref = useRef(null)
    const autoplay = useRef(Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: true }));
    const isInView = useInView(ref);
    const {classes} = useStyles();

    return (
        <motion.div
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
        >
            <div className={classes.title}> Projects</div>
            <Carousel withIndicators
                      plugins={[autoplay.current]}
                      slideSize="33.333333%"
                      slideGap="xl"
                      loop
                      breakpoints={[
                          { maxWidth: 'md', slideSize: '50vw' },
                          { maxWidth: 'sm', slideSize: '50vw' },
                      ]}
                      align="center"
                      slidesToScroll={1}>
                {data.map((project) => (
                    <Carousel.Slide>
                    <ProjectCard
                        key={project.name}
                        data={project}
                    />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </motion.div>
    )
}
