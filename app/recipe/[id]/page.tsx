import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) notFound();

  const artStyle: CSSProperties = { backgroundColor: recipe.color };

  return (
    <main id="top">
      <div className="container recipe-detail">
        <Link className="back-link" href="/#recipes">← Back to all recipes</Link>
        <div className="recipe-detail-hero">
          <div>
            <p className="overline">✳ {recipe.cuisine.toUpperCase()} RECIPE</p>
            <h1>{recipe.title}</h1>
            <p className="detail-description">{recipe.description}</p>
            <div className="detail-meta">
              <span>◷ {recipe.minutes} minutes</span>
              <span>✦ {recipe.difficulty}</span>
            </div>
          </div>
          <div className="detail-art" style={artStyle} aria-hidden="true">{recipe.emoji}</div>
        </div>
        <div className="detail-columns">
          <section className="detail-panel">
            <p className="overline">GET READY</p>
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section className="detail-panel">
            <p className="overline">LET'S MAKE IT</p>
            <h2>Step-by-step</h2>
            <ol className="steps-list">
              {recipe.steps.map((step, index) => <li key={index}>{step}</li>)}
            </ol>
          </section>
        </div>
        <Link className="primary-button detail-back-button" href="/#recipes">Explore more recipes ↗</Link>
      </div>
    </main>
  );
}
