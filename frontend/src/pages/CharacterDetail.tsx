import { useEffect, useState } from "react";
import { Data } from "./listCharacters";

export default function CharacterDetail(id:string) {
    const [data, setData] = useState<Data>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error fetching data');
          }
          return response.json();
        })
        .then((data) => {
          setData(data.results);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, [id]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Ups... algo salió mal</p>;
    if(!data) return <p>Ups... este personaje no existe</p>
    

  return (
    <>
      <h1>{data.name}</h1>
      <div>
        <img src={data.image} alt="" />
        <ul>
            <li>Estado: {data.status}</li>
            <li>Especie: {data.species}</li>
            <li>Tipo: {data.type}</li>
            <li>Género: {data.gender}</li>
        </ul>
    </div>
    </>
  )
}