const DEBUG = true;

const sortOrder = (taskA, taskB) => {
    let TimeA = taskA['time'].split(":").join('');
    let TimeB = taskB['time'].split(":").join('');
    console.log(`Sort TimeA=${TimeA}, TimeB=${TimeB}`);
    return Number(TimeA) - Number(TimeB);
}
export default (daily, weekly) => {
    if(DEBUG) {
        console.log(daily.map(task => {
            return `${Object.values(task)}\n`;
        }));
        console.log(weekly.map(task => {
            return `${Object.values(task)}\n`;
        }));
    }
    const todaysTask = daily.concat(weekly);
    if(DEBUG) {
        console.log(todaysTask.map(task => {
            return `${Object.values(task)}\n`;
        }));
    }
    todaysTask.sort(sortOrder);
    return todaysTask;
};