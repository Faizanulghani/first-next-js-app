"use client";

import { useEffect, useState } from "react";

const Posts = () => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
      async function fetchPosts() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const data = await res.json()
        setPosts(data)
      }
      fetchPosts()
    },[])
  return (
    <>
      <h1>Posts</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
