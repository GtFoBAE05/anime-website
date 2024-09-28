import {useState} from "react";
import styles from './schedule.module.css'

const DaysButtonGroup = ({onDayClick}) => {
    const days = [
        {name: 'sunday'},
        {name: 'monday'},
        {name: 'tuesday'},
        {name: 'wednesday'},
        {name: 'thursday'},
        {name: 'friday'},
        {name: 'saturday'},
    ];

    const [clickedId, setClickedId] = useState('sunday');

    const handleClick = (event, id) => {
        setClickedId(id);
        if(onDayClick){
            onDayClick(id)
        }
    };


    return (
        <>
            {
                days.map(function (day) {
                    return <button
                        key={day.name}
                        name={day.name}
                        onClick={(event) => handleClick(event, day.name)}
                        className={day.name === clickedId ? styles.active : styles.customButton}
                    >
                        {day.name}
                    </button>
                })
            }

        </>
    );

}

export default DaysButtonGroup