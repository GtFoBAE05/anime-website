import ScheduleHeadline from "./ScheduleHeadline.jsx";
import ScheduleItem from "./ScheduleItem.jsx";
import styles from "./schedule.module.css";

const ScheduleSection = (props) => {
    return (
        <>
            {
                Object.entries(props.itemList).map(function ([time, items]) {
                    return (
                        <>
                            <ScheduleHeadline
                                time={time}
                            />

                            <div className={styles.scheduleSectionGroup}>
                                <div className={styles.rectangle}></div>

                                {
                                    items.map(item => (
                                        <ScheduleItem
                                            key={item.mal_id}
                                            id={item.mal_id}
                                            image={item.images.jpg.image_url}
                                            title={item.title}
                                            time={time}
                                        />
                                    ))
                                }
                            </div>


                        </>
                    )
                })
            }

        </>
    )
}

export default ScheduleSection