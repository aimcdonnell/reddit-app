import "./Card.css";
//the curly braces aren't required when you use "export default", only when you use "export"
import Comment from "../Comments/Comment";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getCommentsStatus, fetchComments } from "../../store/commentsSlice";
import { setFilter, clearFilter, getSearchTerm } from "../../store/redditSlice";

//Make all card boxes the same size using CSS
//Continue trying to add navbar to app

const Post = ({ singlePost }) => {
    const post = singlePost.data;
    return(
   
        <div className="posts">
            <div id="post-title">
                <h3>{post.title}</h3>
            </div>
            <div id="post-image">
                {post.post_hint === "image" ? <img src={post.url} alt={post.title} /> : null}
                {post.is_gallery === true ? <img src={post.thumbnail} alt={post.title} /> : null}
            </div>
            <div id="post-text">
                {post.over_18 ? <p>Image has been blocked as it may be offensive or disturbing to some viewers: Click <a href={post.url}>here</a> to see image</p> : null}
                {post.selftext ? <p>{post.selftext}</p> : null}
            </div>
        </div>
    )
}


const Card = ({ posts, status }) => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
    const [subreddit, setSubreddit] = useState("pics");
    const [commentsIdle, setCommentsIdle]= useState([])
  const dispatch = useDispatch()
  const comments = useSelector(getComments)
  const commentStatus = useSelector(getCommentsStatus)
    const searchTerm = useSelector(getSearchTerm)
    const filteredItems = posts.filter((post) => post.data.title.toLowerCase().includes(searchTerm.toLowerCase()));

//   const filter = useSelector(
//     (state) => state.redditArticle.searchTerm
// );
// console.log(commentStatus)

 //the useEffect() hook allows you to perform side effects, e.g. fetch data 
//every time the subreddit changes, the useEffect hook will recall
  useEffect(() => {
    if (commentStatus === "idle") {
        console.log("idle card")
        dispatch(fetchComments())
        // setCommentsIdle(comments)
        // console.log(commentsIdle)
        console.log("commments card", comments)
      }
    //the first .then() waits for the response
    //the promise, triggered by .then() resolves to a response object representing the response to your request
    //promise statuses: pending, fulfilled or rejected
    //the promise only rejects if there is something wrong with the data passed into the fetch, e.g. wrong URL
    // fetch(`https://www.reddit.com/r/${subreddit}.json?limit=10`).then(response => {
    //     //if something has gone wrong
    //     if (response.status !== 200) {
    //         console.log("Unable to fetch data from the server")
    //         return;
    //     }

    // //the second .then() returns a second promise that resolves with the result of parsing
    // //the response body text as JSON
    //     response.json()
    //         .then(data => {
    //             if (data !== null) {
    //             //parsing through the Reddit data and setting articles to the array of children
    //             setPosts(data.data.children.map((post) => post.data));
    //         }
    //     });
    // })
    //     .catch(err => {
    //         console.log(err)
    //         setError(err)
    //     })
    //     .finally(() => {
    //         //update the loading state to false regardless of whether we get posts or not
    //         setLoading(false)
    //     })
  }, [status, dispatch]);

return (
    // if the posts array (data.data.children) isn't null map through the array and get the article
<div>
    <div className="loading">
        {status?.loading && <p>Loading...</p>}
    </div>
    {/* <div className="error">
        {error && <p>There was an error loading the posts</p>}
    </div> */}
    <div className="posts">
    {
                posts.length > 0 ? posts.map((post, index) => {


                    const postComment = comments.filter(comment => {
                        
                        console.log("comment title:", comment.data.link_title)
                        console.log("post title:", post.data.title)
                        return comment.data.link_title === post.data.title
                    })
                    console.log("comment card:", postComment)
                    return(
                    <div>
                        <Post key={index} singlePost={post} />
                        
                    <Comment comments={postComment}/>
                        </div>)
                }) : ("No posts available")
                     }
        {/*<Comments comments={comments}/>*/}    
    </div>
</div>   
)
}

export default Card;