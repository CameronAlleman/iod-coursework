function randomDelay() {
    const delay = Math.floor(Math.random() * 20) + 1; // Random delay between 1 and 20 seconds
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay * 1000); // Convert seconds to milliseconds
    });
}

randomDelay()
    .then(delay => console.log(`There appears to have been a delay of ${delay} seconds.`))
    .catch(delay => console.log(`The delay of ${delay} seconds was unsuccessful.`));