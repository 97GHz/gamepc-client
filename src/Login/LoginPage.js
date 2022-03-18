import Header from './Header'
import LoginForm from './LoginForm'

function LoginPage() {
    return (
    <>
      <Header/>
      <LoginForm/>
      <h3><a href="admin.php">회원가입</a></h3>
    </>
    );
}

export default LoginPage;