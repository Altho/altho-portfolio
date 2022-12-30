import {createStyles, Image} from '@mantine/core';
import { motion } from 'framer-motion';
import {Proficiencies} from '../types';

const useStyles = createStyles((theme) => ({
  card: {
    width: '100%',
    display: 'flex',
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
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

}));

export default function ProficiencyCard({data}: { data: Proficiencies }) {
  const {classes} = useStyles();
  return (
    <motion.div
      className={classes.card}
      initial={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}
      whileHover={{scale: 1.05,
        boxShadow: `${data.color} 0px 13px 27px -5px, ${data.color} 0px 8px 16px -8px`,
    }}
      transition={{duration: 0.3}}
    >
      <div className={classes.left} style={{backgroundColor: data.color}}>
        <div className={classes.nameContainer} style={{backgroundColor: data.color}}><strong>{data.name}</strong></div>
        <div className={classes.imageContainer}>
          <Image
            src={data.icon}
            width={50}
          ></Image>
        </div>
      </div>
      <div className={classes.right}>
        <div>{data.description}</div>
      </div>

    </motion.div>
  )
}
