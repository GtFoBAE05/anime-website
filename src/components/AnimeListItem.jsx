import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AnimeListItem(props){

    const navigate = useNavigate()
    const [imageLink, setImageLink] = useState('')
    useEffect(() => {

        const fetchImage = async () => await axios.get(`https://api.jikan.moe/v4/anime/${props.id}/pictures`)
            .then((response) => {
                setImageLink(response.data.data[0].jpg.image_url)
            })
            .catch((error) => console.error('Axios in React - Error:', error));

        fetchImage()


    }, []);

    function onDivClickHandler() {
        navigate(`/anime/detail/${props.id}`)
    }

    return (
        <div className='animeListItem' onClick={function () {

        }}>
            <div className='containerAnimeListItem' onClick={onDivClickHandler}>
                <h1>{props.title}</h1>
                <img src={imageLink}/>
                <p>{props.synopsis}</p>
            </div>
        </div>
    )
}