export const apiUrl = "https://www.reddit.com/";
export const subreddit = `${apiUrl}/hot.json?limit=10`;


export const getSubredditPosts = async () => {
    const response = await fetch(`${apiUrl}${subreddit}`);
    const json = await response.json();

return json.data.children.map(post => post.data);

};

export const getSubredditPostComments = async() => {
    const response = await fetch(`${apiUrl}${subreddit}`);
    const json = await response.json();

return json[1].data.children.map(comment => comment.data);
}