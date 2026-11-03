export default function NavBar() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#top" aria-label="NextBites home">
          <span className="brand-mark">✳</span>
          next<span>bites</span><i>.</i>
        </a>
        <nav aria-label="Main navigation" className="nav-links">
          <a href="#top">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-button" href="#recipes">Find a recipe ↗</a>
      </div>
    </header>
  );
}
