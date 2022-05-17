import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params) => ({
    header: {
        // subscribe to color scheme changes right in your styles
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing.sm,


        // Dynamic media queries, define breakpoints in theme, use anywhere
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            // Type safe child reference in nested selectors via ref

        },
    },
}));

export default function TopMenu(){
    const { classes } = useStyles();

    return(
        <header className={classes.header}>
            <Logo />
            <MenuItems />
            <DarkModeToggle />

        </header>
    )

}