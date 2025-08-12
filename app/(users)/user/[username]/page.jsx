const SingleProfile = async (props) => {
  const user = await props.params;

  return <div>User: {user.username}</div>;
};

export default SingleProfile;
