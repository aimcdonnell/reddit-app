import React from 'react'
import {  format } from 'date-fns'
import "./Comment.css";

function Comment({comments}) {
  return (
      <div>
      {
        comments.map(comment => {
          const date = new Date()
          const dateFormat = format(comment.data.created, "MMMM do, yyyy 'at' h:mm a" )
          console.log(comment.data)
          return (<div key={comment.data.id} className="comment-wrapper">
            <h3>{comment.data.author}</h3>
            <h3>{comment.data.body}</h3>
            <h3>{dateFormat}</h3>
        </div>)
        })

          }
      </div>
  )
}

export default Comment
