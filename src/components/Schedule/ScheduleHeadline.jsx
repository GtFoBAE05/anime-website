import styles from './schedule.module.css'

const ScheduleHeadline = (props) => {

    return (
        <div className={styles.scheduleHeadlineContainer}>
            <span className={styles.dot}></span>
            <h2 >{props.time}</h2>
        </div>
    )

}

export default ScheduleHeadline