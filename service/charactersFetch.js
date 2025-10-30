import api from "./client";



export const getCharacters = async (filter) => {
        const response = await api.get(`/character/${filter}`)

        return response.data.results
  };

export const getCharacter = async (id) => {
        const response = await api.get(`/character/${id}`)

        console.log(response.data)
        return response.data
  };
