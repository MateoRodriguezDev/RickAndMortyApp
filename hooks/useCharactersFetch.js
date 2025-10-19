import { useEffect, useState } from "react";
import { getCharacter, getCharacters } from "../service/charactersFetch";

export default function useCharactersFetch() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    getCharacters().then((results) => setCharacters(results));
    setIsLoading(false)
  }, []);

  

  return {characters, character, isLoading};
}
