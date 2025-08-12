import Link from "next/link";
const Navigation = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <h2>Faizan Logo</h2>
        <nav>
          <ul className="flex gap-4 font-work-sans">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
