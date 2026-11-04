import Link from "next/link";
import type { CSSProperties } from "react";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const style: CSSProperties = { backgroundColor: recipe.color };
  return (
    <Link href={"/recipe/" + recipe.id} className="recipe-card recipe-card-link" aria-label={"View " + recipe.title + " recipe"}>
      <div className="recipe-art" style={style} aria-hidden="true">
        <span>{recipe.emoji}</span>
      </div>
      <div className="recipe-info">
        <span className="cuisine">{recipe.cuisine}</span>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className="recipe-meta">
          <span>◷ {recipe.minutes} min</span>
          <span>✦ {recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  );
}
