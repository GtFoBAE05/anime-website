import {useEffect, useState} from "react";
import axios from "axios";
import styles from './homecss.module.css'
import {useNavigate} from "react-router-dom";

const PopularSectionItem = (props) => {

    const navigate = useNavigate()

    function onClickHandler() {
        navigate(`anime/detail/${props.id}`)
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

export default PopularSectionItem;