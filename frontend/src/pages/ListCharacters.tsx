import { useEffect, useState } from 'react'
import '../App.css'
import { CharacterCard } from './CharacterCard';

export interface Data{
    id: number,
      name: string,
      status: string,
      species: string,
      type: string,
      gender: string,
      image: string,
}

export default function ListCharacters() {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character")
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
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Ups... algo salió mal</p>;


  return (
    <>
      <h1>Personajes</h1>
      <div>
        {data.map((item, i) => (
          <CharacterCard key={item.id + i}
          id={item.id}
          name={item.name}
          species={item.species}
          gender={item.gender}
          image={item.image}
          ></CharacterCard>
        ))}
    </div>
    </>
  )
}