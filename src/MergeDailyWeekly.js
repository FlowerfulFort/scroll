const sortOrder = (taskA, taskB) => {
    TimeA = taskA['time'].split(":").join('');
    TimeB = taskB['time'].split(":").join('');
    console.log(`Sort TimeA=${TimeA}, TimeB=${TimeB}`);
    return Number(TimeA) - Number(TimeB);
}
export default (daily, weekly) => {
    const todaysTask = daily.concat(weekly);
    todaysTask.sort(sortOrder);
    return todaysTask;
};