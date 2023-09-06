import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => navigate('/');
    return (
        <Grid
            display="flex"
            justifyContent="center"
            flexDirection='column'
            alignItems="center"
            height={"100vh"}
            sx={{ backgroundColor: 'secondary.main' }}
            container
        >
            <Grid item m={5}>
                <Typography variant="h1" fontWeight={10}>Oops!</Typography>
            </Grid>

            <Typography variant="h6" component="p">
                Sorry, but the page you are looking for was not found.
            </Typography>

            <br />

            <Button
                onClick={handleGoBack}
                variant="contained"
            >
                Return
            </Button>
        </Grid>
    );
}

export default ErrorPage;