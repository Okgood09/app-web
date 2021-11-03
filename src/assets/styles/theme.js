import { createTheme } from '@mui/material/styles'

/* CSS HEX */

/*
 * --light-cornflower-blue: #8ecae6ff;
 * --blue-green: #219ebcff;
 * --prussian-blue: #023047ff;
 * --honey-yellow: #ffb703ff;
 * --orange: #fb8500ff; 
 */

export const theme = createTheme({
    spacing: 10,
    palette: {
        primary: {
            main: '#165C73'
        },
        secondary: {
            main: '#50BB98'
        },
        background: {
            default: '#F2F2F2'
        }
    }
})

export const animation = {
    '@keyframes fadeIn': {
        from: {
            opacity: '0',
            transform: 'translate(0, 15px)'
        },
        to: {
            opacity: '1',
            transform: 'translate(0, 0)'
        }
    },
    '@keyframes fadeInContent': {
        from: {
            opacity: '0'
        },
        to: {
            opacity: '1'
        }
    },
    fadeIn1: {
        animation: '$fadeIn .6s'
    },
    fadeIn2: {
        animation: '$fadeIn 1s'
    },
    fadeIn3: {
        animation: '$fadeIn 1.5s'
    },
    fadeInContent: {
        animation: '$fadeInContent 1.7s'
    }
}