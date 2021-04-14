import { useEffect } from "react";

function getWeekCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        } 
    }
    document.cookie = "week=flex"
    return "flex";
  }

function Week() {
    let date = new Date();
    let day = date.getDay();

    useEffect(() =>{
        document.getElementById("week").style.display = getWeekCookie("week");
    }

    )
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

    function toggleWeek() {
        if(document.getElementById("week").style.display == "flex"){
            document.cookie = "week=none"
            document.getElementById("week").style.display = "none";
        } else {
            document.cookie = "week=flex"
            document.getElementById("week").style.display = "flex";
        }
    }

    document.getElementById("hide_week").onclick = toggleWeek;

    function getWeek() {
        let toReturn = []
        let j = 0;
        let daysDate = date.getDate()
        for (let i = day; i != -1; i = getNext(i)) {
            let dayOfWeek = getDayOfWeek(i);
            toReturn.push(
                <div id={`${dayOfWeek}`} className="weekday" key={dayOfWeek}>
                    <div className="dateWeekday">
                        <div className="dateDay">{daysDate + j}</div>
                        <div className='weekDayTitle'>{dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}</div>
                    </div>
                    <div className='weekEvents'></div>
                </div>
            )
            j++;
        }
        return toReturn;
    }
    return <div id="week">{getWeek()}</div>;
}

export default Week;