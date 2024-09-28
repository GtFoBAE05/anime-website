import styles from "../anime.module.css";
import {useNavigate, useParams} from "react-router-dom";

const AnimeRecommendationItem = (props) => {

    const navigate = useNavigate()

    function onClickHandler() {
        navigate(`/anime/detail/${props.id}`)
    }

    return (
        <div className={styles.animePosterItem} onClick={onClickHandler}>
            <div className={styles.animePosterImageItem}>
                <img src={props.image} />
            </div>
            <p>{props.title}</p>
        </div>
    )
}

export default AnimeRecommendationItem