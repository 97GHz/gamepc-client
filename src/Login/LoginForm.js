import { TextField, Box, Button, Grid, Link } from "@mui/material";

function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            password: data.get('password')
        });
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="ID"
                name="username"
                autoComplete="username"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                type="password"
                label="PW"
                name="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        비밀번호 찾기
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        회원가입
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoginForm;