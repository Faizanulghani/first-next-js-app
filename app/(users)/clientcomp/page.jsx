"use client";

import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";
const clientcomp = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setPostData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Hello clientcomp</h2>
      <button className="bg-red-500 p-5" onClick={() => alert("clicked")}>
        Click Me!
      </button>

      <ul className="grid grid-cols-3 gap-5">
        {postData.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default clientcomp;
