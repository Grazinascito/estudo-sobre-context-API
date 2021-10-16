import "./App.css";
import Header from "./components/Header/index";
import {UserProvider} from "./contexts/UserContext";
import Main from "./pages/Main/index";

function App() {
  

  
  return (
    <UserProvider>
      <Header/>
      <Main />
    </UserProvider>
  );
}

export default App;
