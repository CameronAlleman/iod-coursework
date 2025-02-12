function printFibonacci(limit) {
    let [a, b] = [0, 1];
    let count = 0;
    const intervalId = setInterval(() => {
        if (count >= limit) {
            clearInterval(intervalId);
        } else {
            console.log(a);
            [a, b] = [b, a + b];
            count++;
        }
    }, 1000);
}

printFibonacci(9);