import api from "./client";



export const getCharacters = async () => {
        const response = await api.get('/character')

        return response.data.results
  };

export const getCharacter = async (id) => {
        const response = await api.get(`/character/${id}`)

        return response.data
  };
