import { useState } from "react";
import "./App.css";
import Header from "./components/Header/index";
import UserContext from "./contexts/UserContext";
import Main from "./pages/Main/index";

function App() {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const providerValues = {name, setName, age, setAge}
  return (
    <UserContext.Provider value={providerValues}>
      <Header/>
      <Main />
    </UserContext.Provider>
  );
}

export default App;
