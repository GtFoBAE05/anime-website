const TimeMapper = (items) => {
    let result = {};
    let sortedTime = sortTime(items);

    for (let i = 0; i < sortedTime.length; i++) {
        const time = sortedTime[i].broadcast.time.toString();

        if (!result.hasOwnProperty(time)) {
            result[time] = [];
        }

        result[time].push(sortedTime[i]);
    }

    return result;
};

const sortTime = (items) => {
    const filteredItems = items.filter(item => item.broadcast.time !== null);

    return filteredItems.sort(function (a, b) {
        const dateA = new Date(`1970-01-01T${a.broadcast.time}:00`);
        const dateB = new Date(`1970-01-01T${b.broadcast.time}:00`);
        return dateA - dateB;
    });
};

export default TimeMapper;
