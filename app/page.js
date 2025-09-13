import Link from "next/link";

export default function Home() {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold underline">Faizan Ul Ghani</h1>
      <div>
        <p className="p-1 text-blue-500 underline">
          <Link href="/about">About</Link>
        </p>
        <p className="p-1 text-blue-500 underline">
          <Link href="/blogs">Blogs</Link>
        </p>
        <p className="p-1 text-blue-500 underline">
          <Link href="/services">Services</Link>
        </p>
      </div>
    </div>
  );
}
