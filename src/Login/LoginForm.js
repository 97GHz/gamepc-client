function LoginForm() {
    let authURI = 'auth.php';
    return (
        <form action={authURI} method="post">
          <input type="text" name = "id" placeholder="ID" />
          <input type="password" name="pw" placeholder="Password" />
          <input type="submit" id = "submit" value="Login"/>
        </form>
    );
}

export default LoginForm;