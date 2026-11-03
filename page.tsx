import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-spark">✳</span> GOOD FOOD, GOOD MOOD</div>
            <h1 id="hero-heading">Find your<br /><em>next bite<span className="orange-dot">.</span></em></h1>
            <p className="hero-description">
              A little inspiration for whatever you&apos;re craving.
              Easy-to-love recipes, made for real life.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#recipes">Explore recipes <span aria-hidden="true">↗</span></a>
              <span className="hero-note"><span aria-hidden="true">♥</span> Made with love &amp; a pinch of joy</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-blobby" />
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <span className="hero-bowl">🍝</span>
            <span className="hero-spark spark-a">✳</span>
            <span className="hero-spark spark-b">✷</span>
            <span className="hero-spark spark-c">✧</span>
            <div className="hero-sticker">something <strong>delicious</strong><span>is cooking! ♡</span></div>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="recipes-section container" id="recipes" aria-labelledby="recipes-heading">
        <div className="section-intro">
          <div>
            <span className="section-kicker">THE GOOD STUFF</span>
            <h2 id="recipes-heading">Recipes worth <em>making.</em></h2>
            <p>From quick bites to weekend treats, there&apos;s something for everyone.</p>
          </div>
          <span className="recipe-count">{recipes.length} tasty ideas <span aria-hidden="true">↗</span></span>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section id="about" className="about-strip" aria-label="About NextBites">
        <div className="container about-inner">
          <div className="about-icon" aria-hidden="true">♡</div>
          <div>
            <h2>Good food brings us together.</h2>
            <p>NextBites is a cozy little corner for big flavors and everyday cooking inspiration.</p>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </section>
      <footer className="site-footer container">
        <span>© 2026 NextBites</span>
        <span>Whipped up with care ✳</span>
      </footer>
    </main>
  );
}
