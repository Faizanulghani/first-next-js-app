const BlogIdPage = async ({ params }) => {
  let { blogId } = await params;
  console.log(blogId);
  
  return <div>BlogIdPage</div>;
};

export default BlogIdPage;
