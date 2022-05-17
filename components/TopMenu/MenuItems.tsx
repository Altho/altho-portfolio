import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    container: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginRight: theme.spacing.md
    },

    item: {
        color : theme.colorScheme === 'dark' ? 'white' : 'black',
        marginRight: theme.spacing.md

    }
}))

export default function MenuItems(){
    const {classes} = useStyles();
    return(
    <div className={classes.container}>
        <div className={classes.item}>About Me</div>
        <div className={classes.item}>Projects</div>
        <div className={classes.item}>CV</div>
        <div className={classes.item}>Contact</div>



    </div>
    )

}