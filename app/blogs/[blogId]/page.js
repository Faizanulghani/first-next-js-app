import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  let { blogId } = await params;
  return {
    title: `Blog Id: ${blogId}`,
  };
}

const BlogIdPage = async ({ params }) => {
  let { blogId } = await params;
  if (isNaN(Number(blogId))) {
    notFound();
  }
  return <div>Blog Id: {blogId}</div>;
};

export default BlogIdPage;
