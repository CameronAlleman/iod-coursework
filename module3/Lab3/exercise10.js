import fetch from 'node-fetch';
globalThis.fetch = fetch;

async function fetchURLData(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw error;
    }
}

// Test async/await version
async function testFetchURLData() {
    try {
        const data = await fetchURLData('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Async/Await Version Success:', data);
    } catch (error) {
        console.error('Async/Await Version Error:', error.message);
    }

    try {
        const data = await fetchURLData('https://invalid-url');
        console.log('Async/Await Version Success:', data);
    } catch (error) {
        console.error('Async/Await Version Error:', error.message);
    }
}

testFetchURLData();

async function fetchAllURLData(urls) {
    try {
        const promises = urls.map(url => fetchURLData(url));
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        throw error;
    }
}

// Example usage of fetchAllURLData
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://invalid-url'
];

async function testFetchAllURLData() {
    try {
        const data = await fetchAllURLData(urls);
        console.log('Fetch All Success:', data);
    } catch (error) {
        console.error('Fetch All Error:', error.message);
    }
}