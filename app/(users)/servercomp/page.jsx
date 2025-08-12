import React from "react";

const servercomp = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(URL);
  const data = await response.json();

  return (
    <div>
      <h2>Hello serverComp</h2>
      <ul className="grid grid-cols-3 gap-5">
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default servercomp;
