import AnimeReviewItem from "./AnimeReviewItem.jsx";

const AnimeReviewList = (props) => {
    return (
        <div>
            {
                props.itemList.map((review) => {
                    return (
                        <AnimeReviewItem
                            key={review.mal_id}
                            image={review.user.images.jpg.image_url}
                            username={review.user.username}
                            userReview={review.review}
                        />
                    );
                })
            }
        </div>
    );
};

export default AnimeReviewList;
