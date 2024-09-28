import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ReactPlayer from "react-player";

export default function AnimeDetailPage2(){
    const urlParams = useParams();

    const [animeDetail, setAnimeDetail] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://api.jikan.moe/v4/anime/${urlParams.animeId}/full`)
            .then((response) => {
                setAnimeDetail(response.data.data)
                setIsLoading(false)
                console.log(response.data)
            }).catch((error) => console.error('Axios in React - Error:', error));
    }, []);

    return (
        <>
                {isLoading ? 'is Loading' :
                    <div>
                        <h1>{animeDetail.title}</h1>
                        <div className="reactPlayerContainer">
                            <ReactPlayer className='reactPlayer' url={animeDetail.trailer.embed_url}/>
                        </div>
                        <img src={animeDetail.images.jpg.image_url}/>
                        <p>{animeDetail.synopsis}</p>
                    </div>
                }
        </>
    )
}