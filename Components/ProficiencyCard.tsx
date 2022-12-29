import {createStyles, Image} from '@mantine/core';
import { Proficiencies } from '../types';

const useStyles = createStyles((theme) => ({
    card: {
        width: '300px',

    },

}));

export default function ProficiencyCard({data} : {data: Proficiencies}) {
    const { classes } = useStyles();
    return (
        <div className={classes.card} style={{backgroundColor: data.color}}>
            <div>{data.name}</div>
            <Image
                src={data.icon}
                width={50}
            ></Image>
            <div>{data.description}</div>

        </div>
    )
}
