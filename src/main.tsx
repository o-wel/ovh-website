import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import {createTheme, type MantineColorsTuple, MantineProvider} from '@mantine/core';

const analogousColors: MantineColorsTuple = [
        '#566EF0', // primary blue
        '#ABA2D8', // light violet blue
        '#6F56F0', // violet blue
        '#A256F0', // purple
        '#569FF0', // sky blue
        '#D456F0', // magenta
        '#B2A6F0', // lavender
        '#FEFDFD', // light yellow / cream E2DEC9
        '#FC6601', // dark violet blue
        '#F7F3DC', // bright cream
];

const purpleColors: MantineColorsTuple = [
    '#10002b', // main dark purple
    '#240046', // secondary dark purple
    '#3c096c',
    '#5a189a',
    '#7b2cbf',
    '#9d4edd',
    '#c77dff',
    '#e0aaff',
    '#f3e8ff', // unused
    '#fdf0ff', // unused
];

const theme = createTheme({
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        xxl: '36px',
        xxxl: '48px',
    },
    fontFamily: 'Inter, Roboto, sans-serif',
    headings: {
        fontFamily: 'Georgia, serif',
        sizes: {
            h1: { fontSize: '48px'},
            h2: { fontSize: '36px'},
            h3: { fontSize: '24px'},
            h4: { fontSize: '20px'},
            h5: { fontSize: '18px'},
            h6: { fontSize: '16px'},
        },
    },
    colors: {
        analogousColors,
        purpleColors
    },
});

createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <StrictMode>
            <App />
        </StrictMode>,
    </MantineProvider>
)
