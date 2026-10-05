// Choose the best option now → never go back → continue.
// Example 1 - Activity Selection
type Activity = {
    start: number;
    end: number
}
function activitySelection(activities: Activity[]): Activity[]{
    activities.sort((a,b)=>a.end-b.end);
    const selectedActivities: Activity[] = [];
    let lastEndTime = 0;
    for(let a of activities){
        if(a.start>=lastEndTime){
            selectedActivities.push(a);
            lastEndTime = a.end;
        }
    }
    return selectedActivities;
}
function diplay(activities: Activity[]){
    for(let a of activities){
        console.log(a.start, ", ", a.end);
    }
}
const a1: Activity[] =[
    {start: 1, end: 3},
    {start: 2, end: 4},
    { start: 3, end: 5},
    {start: 5, end: 7},
    {start: 6, end: 8}];
const selectedActivities = activitySelection(a1)
diplay(selectedActivities);

// Example 2 - Maximum number of Coins

function minCoins(coins: number[], amount: number): number{
    coins.sort((a,b)=>b-a);
    let count = 0;
    for( let coin of coins){
        while(amount>=coin){
            amount-=coin;
            count++;
        }
    }
    return amount==0? count: -1;
}
console.log(minCoins([1,5,5,5,5,5,10,20], 35));