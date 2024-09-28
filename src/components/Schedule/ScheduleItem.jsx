import styles from './schedule.module.css'
import {GoChevronRight} from "react-icons/go";
import {AiFillTwitterCircle} from "react-icons/ai";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const ScheduleItem = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate()

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    function onClickHandler() {
        navigate(`/anime/detail/${props.id}`)
    }

    return (
        <div className={styles.scheduleContainer}
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}
             onClick={onClickHandler}
        >
            <img src={props.image}/>
            <div className={styles.scheduleItem}>
                <p>{props.title}</p>
                <p>{props.time}</p>
            </div>
            {isHovering && (
                <div className={styles.icon}>
                    <GoChevronRight color='black' fontSize='2em'/>
                </div>
            )}
        </div>
    )
}

export default ScheduleItem