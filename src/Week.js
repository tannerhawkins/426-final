function Week() {
    let date = new Date();
    let day = date.getDay();
    function getDayOfWeek(curr) {
        switch (curr) {
            case 0:
                return "sunday"
            case 1:
                return "monday"
            case 2:
                return "tuesday"
            case 3:
                return "wednesday"
            case 4:
                return "thursday"
            case 5:
                return "friday"
            case 6:
                return "saturday"
        }
    }
    function getNext(curr) {
        if (curr + 1 > 6) {
            if (day == 0) {
                return -1
            }
            return 0
        }
        if (curr + 1 == day) {
            return -1
        }
        return curr + 1;
    }
    function getWeek() {
        let toReturn = []
        for (let i = day; i != -1; i = getNext(i)) {
            let dayOfWeek = getDayOfWeek(i);
            toReturn.push(
                <div id={`${dayOfWeek}`} className="weekday" key={dayOfWeek}>
                    <div className='weekDayTitle'>{dayOfWeek}</div>
                    <div className='weekEvents'></div>
                </div>
            )
        }
        return toReturn;
    }
    return <div id="week">{getWeek()}</div>;
}

export default Week;