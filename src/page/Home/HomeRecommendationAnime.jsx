const HomeRecommendationAnime = () => {
    const backgroundImage = "https://w.wallhaven.cc/full/57/wallhaven-57yd98.png";

    return (
        <div
            className='homeRecommendationContainer'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "cover",
                height: "700px",
                color: "white"
            }}
        >
            <div className='homeRecommendationContent'>
                <h1>
                    Mushoku Tensei
                </h1>
                <p>
                    When a 34-year-old underachiever gets run over by a bus, his story doesn’t end there.
                    Reincarnated
                    in a new world as an infant, Rudeus will seize every opportunity to live the life he’s always
                    wanted. Armed with new friends, some freshly acquired magical abilities, and the courage to do
                    the
                    things he’s always dreamed of, he’s embarking on an epic adventure—with all of his past
                    experience
                    intact!
                </p>
            </div>
        </div>
    );
}

export default HomeRecommendationAnime;
