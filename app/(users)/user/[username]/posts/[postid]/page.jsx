"use client";

import { use } from "react";

const SingleProfilePost = (props) => {
  const user = use(props.params);
  console.log(user);

  return (
    <div>
      User: {user.username}, ID: {user.postid}
    </div>
  );
};

export default SingleProfilePost;
