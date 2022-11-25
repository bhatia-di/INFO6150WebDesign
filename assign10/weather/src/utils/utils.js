const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const getCurrentDay = () => {
    const d = new Date();
    return d.getDay();
};

export const getNextFiveDays = () => {

    const nextFiveDays = [];
    var days = 5;
    var currentDay = getCurrentDay();

    while (days !== 0) {

        nextFiveDays.push(weekday[currentDay]);

        days--;
        currentDay++;
        if (currentDay > 6) currentDay = 0

    }

    return nextFiveDays;

};

