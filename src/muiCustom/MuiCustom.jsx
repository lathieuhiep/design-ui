import { createTheme } from '@mui/material/styles';

const MuiCustom = createTheme({
    typography: {
        fontFamily: `"Noto Serif", sans-serif`,
        htmlFontSize: 10
    },
    palette: {
        primary: {
            main: '#000000',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    lineHeight: 1.6
                }
            }
        }
    }
})

export { MuiCustom }