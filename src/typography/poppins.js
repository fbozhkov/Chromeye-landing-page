import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontSize: '44px',
            fontWeight: 700,
            lineHeight: '48px',
        },
        h2: {
            fontSize: '38px',
            fontWeight: 700,
            lineHeight: '42px',
        },
        h3: {
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '28px',
        },
        body1: {
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '24px',
        },
        body16: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
        },
    },
});