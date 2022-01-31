/* This function parses Date Object & returns day string */
export default function ParseDay(DayObj) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(DayObj);
};
