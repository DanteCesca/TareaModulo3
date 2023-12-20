import React, { useState, useEffect } from "react"
import Navbar from "./components/general/navbar/Navbar"
import Cards from "./components/specific/cards/Cards"
import axios from "axios"


function App() {
  const [characters, setCharacters] = useState([])

  const handleRequest = async () => {
    try {
      const { data: { results } } = await axios.get("https://rickandmortyapi.com/api/character");
      setCharacters(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);
  
  const createCard = () => characters.map((character) => <Cards key={character.id} character={character} />);
  
  return (
    <>
      <Navbar/>
      <div className="container-fluid">
        <div className="row justify-content-around">
          {createCard()}
        </div>
      </div>
    </>
  )
}

export default App
