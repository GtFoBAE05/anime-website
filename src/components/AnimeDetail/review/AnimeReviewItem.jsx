import styles from '../anime.module.css';

const AnimeReviewItem = (props) => {
    return (
        <div className={styles.animeReviewContainer}>
            <div className={styles.profileContainer}>
                <img src={props.image}  className={styles.profileImage} />
                <h4>{props.username}</h4>
            </div>
            <p className={styles.userReview}>{props.userReview}</p>
        </div>
    );
};

export default AnimeReviewItem;
