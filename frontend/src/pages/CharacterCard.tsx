import '../App.css'

export interface DataCardProps{
    id: number,
      name: string,
      species: string,
      gender: string,
      image: string,
}


export function CharacterCard({ id, name, species, gender,image }: DataCardProps) {

    return (
        <a href={`/personaje/${id}`}>
        <div
            className="flex justify-center hover:cursor-pointer">
            <div className="">
                <img
                    src={image}
                    alt=""
                />
                <div className="w-full">
                    <h2 className="">
                        {name}
                    </h2>
                    <h4>
                        {species}
                    </h4>
                    <h4>
                        {gender}
                    </h4>
                </div>
            </div>
        </div>
        </a>
    );
}
