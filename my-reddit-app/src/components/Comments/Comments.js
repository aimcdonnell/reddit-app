import React from 'react'

function Comments({comments}) {
  return (
    <div>
      {
        comments.map(comment => <div key={comment.data.id}>

          <h3>{comment.data.author}</h3>
          <h3>{comment.data.body}</h3>
          <h3>{comment.data.created}</h3>
        </div> )
      }
    </div>
  )
}

export default Comments
