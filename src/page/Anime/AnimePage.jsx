import {useEffect, useState} from "react";
import axios from "axios";
import AnimeListItem from "../../components/AnimeListItem.jsx";

export default function AnimePage() {

    const [animeList, setAnimeList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get('https://api.jikan.moe/v4/top/anime')
            .then((response) => {
                setAnimeList(response.data.data)
                setIsLoading(false)
                console.log(response.data.data)
            })
            .catch((error) => console.error('Axios in React - Error:', error));
    }, []);

    return (
        <>
            <div className='content'>
                {isLoading ? <h1>Loading...</h1> : (
                    <>
                        <h1>Top Anime</h1>
                        {animeList.map(function (anime) {
                            return (
                                <AnimeListItem
                                    key={anime.mal_id}
                                    id={anime.mal_id}
                                    title={anime.title}
                                    synopsis={anime.synopsis}
                                />
                            );
                        })}
                    </>
                )}
            </div>


        </>
    )
}