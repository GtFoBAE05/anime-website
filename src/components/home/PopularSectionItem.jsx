import {useEffect, useState} from "react";
import axios from "axios";
import styles from './homecss.module.css'
import {useNavigate} from "react-router-dom";

const PopularSectionItem = (props) => {

    const [imageLink, setImageLink] = useState('')
    const navigate = useNavigate()
    useEffect(() => {

        const fetchImage = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/${props.type}/${props.id}/pictures`);
                setImageLink(response.data.data[0].jpg.image_url);
            } catch (error) {
                console.error('Axios in React - Error:', error);
            }
        };

        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        const fetchWithDelay = async (index) => {
            await delay(index * 10000);
            fetchImage();
        };

        fetchWithDelay(props.index);

    }, [props.id, props.type]);

    function onClickHandler() {
        navigate(`anime/detail/${props.id}`)
    }

    return (
        <div className={styles.animePosterItem} onClick={onClickHandler}>
            <div className={styles.animePosterImageItem}>
                <img src={imageLink} />
            </div>
            <p>{props.title}</p>
        </div>
    )

}

export default PopularSectionItem;