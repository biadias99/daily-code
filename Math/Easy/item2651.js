/* 
- Name: 2651. Calculate Delayed Arrival Time
- Description: You are given a positive integer arrivalTime denoting the arrival time
of a train in hours, and another positive integer delayedTime denoting the amount of delay
in hours.
- My line of thought: Just add the arrival time and the delayed time, then take the result modulo 24
to get the delayed arrival time in hours.
- Time complexity: O(1)
- Space complexity: O(1)
*/

var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    const hours = arrivalTime + delayedTime;
    return hours % 24
};