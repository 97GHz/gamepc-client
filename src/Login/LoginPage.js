import LoginForm from './LoginForm'

import { Container, CssBaseline } from "@mui/material";

function LoginPage() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <LoginForm />
    </Container>
  );
}

export default LoginPage;