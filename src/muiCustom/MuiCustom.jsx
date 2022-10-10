import { createTheme } from '@mui/material/styles';

const MuiCustom = createTheme({
    typography: {
        fontFamily: `"Noto Serif", sans-serif`,
        htmlFontSize: 10
    },
    palette: {
        primary: {
            main: '#ff4f41'
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    transition: "all 0.4s ease-in-out",
                    "&:hover": {
                        backgroundColor: '#000',
                        boxShadow: "none",
                    }

                }
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