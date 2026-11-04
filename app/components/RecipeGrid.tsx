"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visible = recipes.filter((recipe) =>
    (recipe.title + " " + recipe.cuisine).toLowerCase().includes(normalizedQuery)
  );

  return (
    <div>
      <div className="search-bar">
        <label className="search-label" htmlFor="recipe-search">Search your cravings</label>
        <div className="search-input-wrap">
          <span aria-hidden="true" className="search-icon">⌕</span>
          <input
            id="recipe-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try pizza, breakfast, Italian…"
            autoComplete="off"
          />
        </div>
        <p className="search-results" role="status" aria-live="polite">
          {visible.length} {visible.length === 1 ? "recipe" : "recipes"} found
        </p>
      </div>
      {visible.length === 0 ? (
        <div className="empty-results">
          <span aria-hidden="true">🍽️</span>
          <h3>No recipes found</h3>
          <p>No recipes match “{query}”. Try another recipe or cuisine.</p>
          <button type="button" onClick={() => setQuery("")}>Clear search</button>
        </div>
      ) : (
        <div className="recipe-grid">
          {visible.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
