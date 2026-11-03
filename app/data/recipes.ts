export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  color: string;
};

export const recipes: Recipe[] = [
  { id: "pizza", title: "Classic Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian", description: "Sweet tomato, fresh basil and melty mozzarella.", color: "#fde5d9" },
  { id: "toast", title: "The Perfect Avo Toast", emoji: "🥑", minutes: 10, difficulty: "Easy", cuisine: "Breakfast", description: "Creamy avocado, bright lemon and crunchy toast.", color: "#e5f0da" },
  { id: "ramen", title: "Cozy Spicy Ramen", emoji: "🍜", minutes: 25, difficulty: "Medium", cuisine: "Japanese", description: "A warm and flavorful bowl with a little kick.", color: "#ffe8d0" },
  { id: "pancakes", title: "Berry Fluffy Pancakes", emoji: "🥞", minutes: 20, difficulty: "Easy", cuisine: "Breakfast", description: "Soft golden stacks topped with juicy berries.", color: "#f8e0e7" },
  { id: "salad", title: "Feel-Good Buddha Bowl", emoji: "🥗", minutes: 30, difficulty: "Easy", cuisine: "Healthy", description: "Fresh vegetables and plenty of vibrant flavor.", color: "#def0e5" },
  { id: "cookies", title: "Gooey Chocolate Cookies", emoji: "🍪", minutes: 28, difficulty: "Easy", cuisine: "Dessert", description: "Crispy edges and soft chocolate-chip centers.", color: "#f4e1cf" },
  { id: "tacos", title: "Taco Tuesday, Anytime", emoji: "🌮", minutes: 25, difficulty: "Easy", cuisine: "Mexican", description: "Bright, zesty tacos for any night of the week.", color: "#f3ecd2" },
  { id: "smoothie", title: "Sunshine Mango Smoothie", emoji: "🥭", minutes: 5, difficulty: "Easy", cuisine: "Drinks", description: "A refreshing five-minute tropical treat.", color: "#fff0c9" },
];
