import { useState, useContext } from "react";
import './style.css';
import UserContext from "../../contexts/UserContext";


const EditProfile = () => {

  const {setName, setAge} = useContext(UserContext);
  
  const [localName, setLocalName] = useState("");
  const [localAge, setLocalAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("entrou");

    if(!localName){
      return;
    }

    setName(localName);
    setAge(localAge);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Digite o seu nome:</label>
      <input
        onChange={(event) => setLocalName(event.target.value)}
        id="name"
        type="text"
        placeholder="José"
        value={localName}
      />
      <label htmlFor="age">Digite sua idade:</label>
      <input
        onChange={(event) => setLocalAge(event.target.value)}
        id="age"
        type="text"
        placeholder="21"
        value={localAge}
      />
      <button>Enviar</button>
    </form>
  );
};

export default EditProfile;
