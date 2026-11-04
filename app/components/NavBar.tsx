import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link className="brand" href="/#top" aria-label="NextBites home">
          <span className="brand-mark">✳</span>
          next<span>bites</span><i>.</i>
        </Link>
        <nav aria-label="Main navigation" className="nav-links">
          <Link href="/#top">Home</Link>
          <Link href="/#recipes">Recipes</Link>
          <Link href="/#about">About</Link>
        </nav>
        <Link className="nav-button" href="/#recipes">Find a recipe ↗</Link>
      </div>
    </header>
  );
}
