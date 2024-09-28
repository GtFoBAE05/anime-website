import {useEffect, useState} from "react";
import DaysButtonGroup from "../../components/Schedule/DaysButtonGroup.jsx";
import axios from "axios";
import ScheduleItem from "../../components/Schedule/ScheduleItem.jsx";
import ScheduleHeadline from "../../components/Schedule/ScheduleHeadline.jsx";
import ScheduleSectionList from "../../components/Schedule/ScheduleSectionList.jsx";
import timeMapper from "../../utils/TimeMapper.jsx";
import ScheduleSection from "../../components/Schedule/ScheduleSection.jsx";

const SchedulePage = () => {

    const [animeSchedule, setAnimeSchedule] = useState([])
    const [nowTime, setNowTime] = useState(new Date())
    const [selectedDay, setSelectedDay] = useState('sunday');


    useEffect(() => {

        const fetchAnimeSchedule = async () => await axios
            .get(`https://api.jikan.moe/v4/schedules?filter=${selectedDay}`)
            .then((response) => {

                setAnimeSchedule(timeMapper(response.data.data))
                console.log(timeMapper(response.data.data))
                console.log(response.data.data)
            })
            .catch((error) => console.error('Axios in React - Error:', error));

        setInterval(function () {
            setNowTime(new Date())
        }, 1000);

        fetchAnimeSchedule()

    }, [selectedDay]);

    function getDateTimeString() {
        let day = nowTime.toLocaleString('en-us', {weekday: 'long'})

        let time = nowTime.toLocaleString('en-us', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
        })

        return day + " " + time
    }

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    return (
        <div className='contentContainer'>
            <h1>{getDateTimeString()}</h1>
            <DaysButtonGroup onDayClick={handleDayClick}/>
            <ScheduleSection
                itemList={animeSchedule}
            />
        </div>
    )

}

export default SchedulePage