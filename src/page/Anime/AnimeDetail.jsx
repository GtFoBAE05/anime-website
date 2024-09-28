import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from './anime.module.css'
import ReactPlayer from "react-player";
import PopularSectionItem from "../../components/home/PopularSectionItem.jsx";
import AnimeRecommendationItem from "../../components/AnimeDetail/recommendation/AnimeRecommendationItem.jsx";
import AnimeRecommendationList from "../../components/AnimeDetail/recommendation/AnimeRecommendationList.jsx";
import AnimeReviewItem from "../../components/AnimeDetail/review/AnimeReviewItem.jsx";
import AnimeReviewList from "../../components/AnimeDetail/review/AnimeReviewList.jsx";

const AnimeDetail = () => {
    const urlParams = useParams()
    const [animeDetailData, setAnimeDetailData] = useState([])
    const [animeProducers, setAnimeProducers] = useState('')
    const [animeStudios, setAnimeStudios] = useState('')
    const [animeRecommendations, setAnimeRecommendations] = useState([])
    const [animeEpisodes, setAnimeEpisodes] = useState([])
    const [animeReviews, setAnimeReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchAnimeDetailData = async () => await axios.get(`https://api.jikan.moe/v4/anime/${urlParams.animeId}/full`)
            .then((response) => {
                setAnimeDetailData(response.data.data)
                setAnimeProducers(response.data.data.producers.map(producer => producer.name).join(', '))
                setAnimeStudios(response.data.data.studios.map(studio => studio.name).join(', '))
                setIsLoading(false)
                console.log(response.data)
            })
            .catch((error) => console.error('Axios in React - Error:', error));

        const fetchAnimeEpisodes = async () => await axios.get(`https://api.jikan.moe/v4/anime/${urlParams.animeId}/episodes`)
            .then((response) => {
                setAnimeEpisodes(response.data.data)
                console.log(response.data)
            })
            .catch((error) => console.error('Axios in React - Error:', error));


        const fetchAnimeRecommendations = async () => await axios.get(`https://api.jikan.moe/v4/anime/${urlParams.animeId}/recommendations`)
            .then((response) => {
                setAnimeRecommendations(response.data.data)
                console.log(response.data.data)
            })
            .catch((error) => console.error('Axios in React - Error:', error));

        const fetchAnimeReviews = async () => await axios.get(`https://api.jikan.moe/v4/anime/${urlParams.animeId}/reviews`)
            .then((response) => {
                setAnimeReviews(response.data.data)
                console.log(response.data.data)
            })
            .catch((error) => console.error('Axios in React - Error:', error));

        fetchAnimeRecommendations()
        fetchAnimeDetailData()
        fetchAnimeEpisodes()
        fetchAnimeReviews()


    }, [urlParams.animeId]);


    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            <div className={styles.headerImage}>
                <div
                    className={styles.backgroundImage}
                    style={{
                        backgroundImage: `url(${animeDetailData.images.jpg.image_url})`,
                        filter: 'blur(10px)',
                        backgroundSize: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                    }}
                ></div>
                <div className={styles.headerContent}>
                    <img src={animeDetailData.images.jpg.image_url} alt="Header"/>
                </div>
            </div>

            <div className={styles.sectionBody}>
                <section className={styles.layout}>
                    <div className={styles.grow3}>

                        <h1>{animeDetailData.title}</h1>
                        <p>{animeEpisodes.length} Episodes</p>

                        <p>Score {animeDetailData.score} by {animeDetailData.scored_by}</p>

                        <p style={{textAlign: 'left'}}>{animeDetailData.synopsis}</p>

                        <div className={styles.genresContainer}>
                            {animeDetailData.genres.map(function (genre) {
                                return <p className={styles.genresBox} key={genre.mal_id}>{genre.name}</p>
                            })}
                        </div>

                        <div className={styles.moreDetailContainer}>
                            <div className={styles.moreDetailContent}>
                                <div className={styles.label}>
                                    <p>Rating</p>
                                </div>
                                <div className={styles.data}>
                                    <p>{animeDetailData.rating}</p>
                                </div>
                            </div>
                            <hr className="solid"/>
                            <div className={styles.moreDetailContent}>
                                <div className={styles.label}>
                                    <p>Producers</p>
                                </div>
                                <div className={styles.data}>
                                    <p>{animeProducers}</p>
                                </div>
                            </div>
                            <hr className="solid"/>
                            <div className={styles.moreDetailContent}>
                                <div className={styles.label}>
                                    <p>Studios</p>
                                </div>
                                <div className={styles.data}>
                                    <p>{animeStudios}</p>
                                </div>
                            </div>
                            <hr className="solid"/>

                        </div>


                        <div className={styles.recommendationsContainer}>

                            <h2>If you like this anime, you might like...</h2>
                            <div className={styles.recommendationsList}>
                                {animeRecommendations.slice(0, 5).map(function (anime) {
                                    return <AnimeRecommendationItem
                                        key={anime.entry.mal_id}
                                        id={anime.entry.mal_id}
                                        title={anime.entry.title}
                                        image={anime.entry.images.jpg.image_url}
                                    />
                                })}
                            </div>

                        </div>

                        <div style={{
                            width: '100%',
                            alignItems: 'start',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'left'
                        }}>
                            <h2>Reviews</h2>

                            <AnimeReviewList itemList={animeReviews}/>

                        </div>


                    </div>
                    <div className={styles.grow1}>
                    <div className={styles.reactPlayerContainer}>
                            <ReactPlayer className={styles.reactPlayer} url={animeDetailData.trailer.embed_url}/>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )

}

export default AnimeDetail