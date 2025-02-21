function delayMsg(msg) 
{ 
    console.log(`This message will be printed after a delay: ${msg}`) 
} 
 
setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
delayMsg('#4: Not delayed at all')
setTimeout(delayMsg, 10 * 1000, '#4:Delayed by 10 seconds');
setTimeout(() => {
    clearTimeout(setTimeout);
    console.log('TimeoutCancelled');
}, 3000);
//a) the order will be 4,3,2,1

//b
delayMsg( () => console.log(`This message will be printed after a delay: ${msg}`))



