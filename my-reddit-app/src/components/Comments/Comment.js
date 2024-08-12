import React from 'react'


function Comment({comment}) {
  return (
      <div>
          {
              <div>

                  <h3>{comment.data.author}</h3>
                  <h3>{comment.data.body}</h3>
                  <h3>{comment.data.created}</h3>
              </div>
          }
      </div>
  )
}

export default Comment
