export const apiUrl = "https://www.reddit.com/";
export const subreddit = `${apiUrl}/hot.json`;


export const getSubredditPosts = (subreddit) => {

    fetch(subreddit)
//treating the response as if it were JSON by converting it
//into a JavaScript data structure
    .then(response => {
        if (!response.ok) {
            throw new Error ('Failed to fetch data from URL');
        }
        return response.json();
    })
    //use the data we get from the API
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

};
