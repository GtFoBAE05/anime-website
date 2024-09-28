import styles from './schedule.module.css'
import ScheduleItem from "./ScheduleItem.jsx";

const ScheduleSectionList = (props) => {
    return (
        <>

            {

                Object.entries(props.itemList).map(([time, items]) => (
                    items.map(item => (
                        <ScheduleItem
                            key={item.mal_id}
                            id={item.mal_id}
                            image={item.image}
                            title={item.title}
                            time={time}
                        />
                    ))
                ))

            }

        </>
    )
}

export default ScheduleSectionList