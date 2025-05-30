/* 
- Name: 2621. Sleep
- Description: Given a positive integer millis,
write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
- My line of thought: Just use the setTimeout function to create a promise that resolves after
some time.
*/

async function sleep(millis) {
    await new Promise(x => setTimeout(x, millis));
}
