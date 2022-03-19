import Home from "./Home/Home"
import LoginPage from "./Login/LoginPage";
import Copyright from "./Common/Copyright";
import Test from "./test";

function App() {
  return (
    <div className="App">
      {/*
      <LoginPage></LoginPage>
      */}
      {
        <Home />
      }
      <Copyright
        sx={{ mt: 8, mb: 4 }}
      />
    </div>
  );
}

export default App;