import React from 'react';
import {  formatDistanceToNow } from 'date-fns';
import "./Comment.css";

function Comment({comments}) {
  return (
      <div>
      {
        comments.map(comment => {
          const timeAgo = formatDistanceToNow(new Date(comment.data.created * 1000), { addSuffix: true })
          return (<div key={comment.data.id} className="comment-wrapper">
            <h3>{comment.data.author}</h3>
            <h3>{comment.data.body}</h3>
            <h3>{timeAgo}</h3>
        </div>)
        })
      }
      </div>
  )
}


export default Comment
