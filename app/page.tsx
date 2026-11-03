import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="overline">✳ GOOD FOOD, GOOD MOOD</p>
            <h1>Find your<br /><em>next bite<span>.</span></em></h1>
            <p className="hero-description">A little inspiration for whatever you&apos;re craving. Easy-to-love recipes, made for real life.</p>
            <a className="primary-button" href="#recipes">Explore recipes ↗</a>
          </div>
          <div className="hero-art" aria-hidden="true"><span>🍝</span><div className="sticker">something <strong>delicious</strong> is cooking! ♡</div></div>
        </div>
      </section>
      <section className="container recipes-section" id="recipes">
        <div className="section-heading">
          <div><p className="overline">THE GOOD STUFF</p><h2>Recipes worth <em>making.</em></h2><p>From quick bites to weekend treats, there&apos;s something for everyone.</p></div>
          <span className="count">{recipes.length} tasty ideas ↗</span>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </section>
      <section className="about-section" id="about">
        <div className="container"><h2>Good food brings us together.</h2><p>NextBites is a cozy corner for big flavors and everyday cooking inspiration.</p></div>
      </section>
      <footer className="container footer"><span>© 2026 NextBites</span><span>Made with care ✳</span></footer>
    </main>
  );
}
