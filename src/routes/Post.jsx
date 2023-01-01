import 
  React, 
  { useState } 
  from 'react'
import postsApi from "../api/api";
import { Title } from "../components/Title";

export const Post = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const send = async(e)=>{
    e.preventDefault();

    const newPost = {title, body, userId: 1,}
    await postsApi.post(`/posts`, {
      body: newPost,
    })
  }

  return (
    <div className='new-post'>
      <Title>Create new post</Title>

      <form onSubmit={(e) => send(e)}>
        <label htmlFor="title">
          <input 
            type="text" 
            placeholder="Title..." 
            title="title" 
            id="title"
            value={title}
            onChange={({target})=> setTitle(target.value)}
            />
        </label>

        <label htmlFor="body">
          <textarea 
            placeholder="Body..."
            name="body" 
            id="body" 
            title="body"
            value={body}
            onChange={({target})=> setBody(target.value)}
          >
          </textarea>
        </label>

        <button 
          type="submit"
          className="btn"
          >To send</button>
      </form>
    </div>
  )
}