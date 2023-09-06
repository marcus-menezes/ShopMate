import { createTheme } from "@mui/material";
import Colors from "./colors";

const materialTheme = createTheme({
    palette: {
        primary: {
            main: Colors.Primary,
            dark: Colors.Primary,
        },
        secondary: {
            main: Colors.Secondary,
        },
        background: {
            default: Colors.Secondary
        },
        error: {
            main: Colors.Red,
        },
        info: {
            main: Colors.White,
        },
        text: {
            primary: Colors.Secondary,
            secondary: Colors.Secondary
        }
    },
    typography: {
        allVariants: {
            fontFamily: "sans-serif",
            color: Colors.Black,
        },
    },
});

export default materialTheme;