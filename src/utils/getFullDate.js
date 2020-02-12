const getFullDate = () => {
    let d = new Date()
    let day = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ][d.getDay() - 1]

    let month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ][d.getMonth() - 1]

    return `${day} ${d.getDate()} ${month} ${d.getFullYear()}`
}

export default getFullDate
