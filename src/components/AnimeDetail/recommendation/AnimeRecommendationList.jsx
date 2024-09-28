import styles from "../anime.module.css";
import AnimeRecommendationItem from "./AnimeRecommendationItem.jsx";

const AnimeRecommendationList = (props) => {
    return (
            <div>
                <div className={styles.animePosterContainer}>
                    {props.itemList.map(function (item) {
                        return (
                            <AnimeRecommendationItem
                                key={item.entry.mal_id}
                                id={item.entry.mal_id}
                                title={item.entry.title}
                                image={item.entry.images.jpg.image_url}
                            />
                        );
                    })}
                </div>
            </div>
    )
}

export default AnimeRecommendationList