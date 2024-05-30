const apiUrl = "https://www.reddit.com/hot.json";

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error ('Failed to fetch data from URL');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });