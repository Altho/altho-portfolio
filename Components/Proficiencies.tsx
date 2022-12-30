
import {createStyles, SimpleGrid } from '@mantine/core';
import {motion, MotionValue, useInView, useTransform } from "framer-motion"
import { useRef } from 'react';
import { data } from '../proficienciesData';
import ProficiencyCard from './ProficiencyCard';

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


export default function Proficiencies () {
    const ref = useRef(null)
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
            <div className={classes.title}> Proficiencies</div>
            <SimpleGrid

              cols={2}
              spacing="lg"
              breakpoints={[
                { maxWidth: 600, cols: 1, spacing: 'sm' },
              ]}
            >
                {data.map((proficiency) => (
                    <ProficiencyCard
                        key={proficiency.name}
                        data={proficiency}
                    />))}
            </SimpleGrid>
        </motion.div>
    )
}
