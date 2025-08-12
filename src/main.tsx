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
        '#E2DEC9', // light yellow / cream
        '#473798', // dark violet blue
        '#F7F3DC', // bright cream
];

const theme = createTheme({
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '28px',
        '2xl': '36px',
        '3xl': '48px',
    },
    fontFamily: 'Inter, Roboto, sans-serif',
    colors: {
        analogousColors
    },
});

createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <StrictMode>
            <App />
        </StrictMode>,
    </MantineProvider>
)
