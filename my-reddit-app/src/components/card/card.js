import "./Card.css";
//the curly braces aren't required when you use "export default", only when you use "export"
import Comment from "../Comments/Comment";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getCommentsStatus, fetchComments } from "../../store/commentsSlice";
import { setFilter, clearFilter, getSearchTerm } from "../../store/redditSlice";

//Make all card boxes the same size using CSS

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
console.log("rerender");
    const [filteredPosts, setFilteredPosts]= useState([]);
  const dispatch = useDispatch();
  const comments = useSelector(getComments);
  const commentStatus = useSelector(getCommentsStatus);
    const searchTerm = useSelector(getSearchTerm);
    function filteredItems() {
       return posts.filter((post) => 
            post.data.title.toLowerCase().includes(searchTerm.toLowerCase())
            
        );
   } 
console.log("filtered", filteredPosts)

 //the useEffect() hook allows you to perform side effects, e.g. fetch data 
//every time the subreddit changes, the useEffect hook will recall
  useEffect(() => {
    if (commentStatus === "idle") {
        dispatch(fetchComments());
      }
      setFilteredPosts(filteredItems())
   
  }, [status, dispatch, searchTerm]);

return (
    // if the posts array (data.data.children) isn't null map through the array and get the article
<div>
    <div className="loading">
        {status?.loading && <p>Loading...</p>}
    </div>
    <div className="posts">
    {
                filteredPosts.length > 0 ? filteredPosts.map((post, index) => {


                    const postComment = comments.filter(comment => {
                        return comment.data.link_title === post.data.title;
                    })
                    return(
                    <div>
                        <Post key={index} singlePost={post} />
                        
                    <Comment comments={postComment}/>
                        </div>)
                }) : ("No posts available")
                     }  
    </div>
</div>   
)
}

export default Card;