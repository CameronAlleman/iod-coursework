function printMe() { 
    console.log('printing debounced message') 
    } 
   
    
    function debounce(func , ms = 1000) {
        let pause;
            return function(...args) {
                setTimeout(func, ms);
                timeout = setTimeout(() => func.apply(this, args), ms);
            }
    }
         printMe = debounce(printMe);//create this debounce function for a) 




    // //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 
    // 1000ms of no calls 
    setTimeout( printMe, 100);  
    setTimeout( printMe, 200);  
    setTimeout( printMe, 300);  