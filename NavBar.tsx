export default function NavBar() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="brand" href="#top" aria-label="NextBites home">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>next<span className="brand-emphasis">bites</span><span className="brand-dot">.</span></span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#top" className="nav-active" aria-current="page">Home</a>
          <a href="#recipes">Recipes</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#recipes">Find a recipe <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
