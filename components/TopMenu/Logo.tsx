import {createStyles} from '@mantine/core';



const useStyles = createStyles((theme) => ({

    logo: {
        marginRight: 'auto',
        fontSize: theme.fontSizes.xl,
        color: theme.colorScheme === 'dark' ? 'white' : 'black',
    },
    span: {
        color: theme.colorScheme === 'dark' ? 'yellow' : 'blue',

    }

}))

export default function Logo() {
    const {classes}= useStyles();
    return (
        <h1 className={classes.logo}><span className={classes.span}>Al</span>an <span className={classes.span}>Tho</span>mas</h1>
    )

}