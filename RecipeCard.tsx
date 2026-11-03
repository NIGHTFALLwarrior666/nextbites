import type { CSSProperties } from "react";
import type { Recipe } from "../data/recipes";

/** Reusable, strictly typed recipe card — one component for every recipe. */
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const artStyle = {
    "--recipe-bg": recipe.bg,
    "--recipe-accent": recipe.accent,
  } as CSSProperties;

  return (
    <article className="recipe-card">
      <div className="card-art" style={artStyle} aria-hidden="true">
        <span className="art-ring art-ring-one" />
        <span className="art-ring art-ring-two" />
        <span className="recipe-emoji">{recipe.emoji}</span>
        {recipe.tag && <span className="recipe-tag">{recipe.tag}</span>}
      </div>
      <div className="card-body">
        <span className="cuisine-label">{recipe.cuisine}</span>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="card-footer">
          <span className="meta-item"><span aria-hidden="true">◷</span> {recipe.minutes} min</span>
          <span className="meta-divider" aria-hidden="true" />
          <span className="meta-item"><span aria-hidden="true">✦</span> {recipe.difficulty}</span>
        </div>
      </div>
    </article>
  );
}
