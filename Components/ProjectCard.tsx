import {createStyles, Image} from '@mantine/core';
import { motion } from 'framer-motion';
import {Projects} from '../types';

const useStyles = createStyles((theme) => ({
    card: {
        width: '100%',
        display: 'block',
        border: theme.colorScheme === 'dark' ? `1px solid ${theme.colors.dark[0]}` : `1px solid ${theme.colors.gray[7]}`,
        backdropFilter: 'blur(10px)',
    },
    left: {
        width: '30%',
    },
    right: {
        padding: '10px',
        width: '70%',
    },
    nameContainer: {
        width: '100%',
        padding: '10px',
        boxShadow: 'rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(255, 255, 255, 0.23) 0px 6px 6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

}));

export default function ProjectCard({data}: { data: Projects }) {
    const {classes} = useStyles();
    return (
        <motion.div
            className={classes.card}
            initial={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}
            whileHover={{scale: 1.05,
            }}
            transition={{duration: 0.3}}
        >

                <div className={classes.nameContainer}><strong>{data.name}</strong></div>
                <div className={classes.imageContainer}>
                    <Image
                        src={data.image}
                        width={'100%'}
                    ></Image>
                </div>


                <div>{data.description}</div>


        </motion.div>
    )
}
