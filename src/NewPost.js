import React from 'react'

const NewPost = ({handleSubmit,postTitel,postBody,setPostTitle,setPostBody}) => {
  return (
    <main className='NewPost'>
      <h2>NewPost</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title: </label>
        <input 
        id='postTitle'
        type='text'
        required
        value={postTitel}
        onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor='postBody'>Post:</label>
        <textarea 
        id='postBody'
        type='text'
        value={postBody}
        onChange={(e)=>setPostBody(e.target.value)}
        />
        <button type='Submit'>Submit </button>
      </form>
    </main>
  )
}

export default NewPost
