const SingleProfilePost = async (props) => {
  const user = await props.params;
  console.log(user);

  return (
    <div>
      User: {user.username}, ID: {user.postid}
    </div>
  );
};

export default SingleProfilePost;
