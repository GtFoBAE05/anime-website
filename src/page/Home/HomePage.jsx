import HomeRecommendationAnime from "./HomeRecommendationAnime.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import PopularSectionList from "../../components/home/PopularSectionList.jsx";

export default function HomePage() {
    const [popularAnime, setPopularAnime] = useState([])
    const [popularManga, setPopularManga] = useState([])

    useEffect(() => {
        const fetchPopularAnime = async () => await axios
            .get('https://api.jikan.moe/v4/top/anime')
            .then((response) => {
                setPopularAnime(response.data.data)
            })
            .catch((error) => console.error('Axios in React - Error in fetch popular anime:', error));

        const fetchPopularManga = async () => await axios
            .get('https://api.jikan.moe/v4/top/manga')
            .then((response) => {
                setPopularManga(response.data.data)
            })
            .catch((error) => console.error('Axios in React - Error in fetch popular manga:', error));

        fetchPopularAnime()
        fetchPopularManga()
    }, [popularAnime, popularManga]);

    return (
        <div className='contentContainer'>
            <HomeRecommendationAnime/>

            <PopularSectionList
                headline="Popular On Anime"
                itemList={popularAnime}
                type="anime"
            />

            <PopularSectionList
                headline="Popular On Manga"
                itemList={popularManga}
                type="manga"
            />

        </div>
    );
}