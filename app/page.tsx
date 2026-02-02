import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Home Page</h1>
      <p>This is the home page.</p>

      <nav>
        <Link href="/about" className="link">About</Link>
        <Link href="/contact" className="link">Contact</Link>
      </nav>
    </div>
  );
}
