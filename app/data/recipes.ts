export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  color: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "pizza",
    title: "Classic Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "Sweet tomato, fresh basil and melty mozzarella.",
    color: "#fde5d9",
    ingredients: ["1 ready-made pizza base", "1/3 cup tomato sauce", "100 g fresh mozzarella", "Fresh basil leaves", "1 tsp olive oil"],
    steps: ["Preheat the oven to 240°C.", "Place the pizza base on a baking tray and spread tomato sauce evenly.", "Tear mozzarella over the sauce and drizzle with olive oil.", "Bake for 10–15 minutes until the crust is golden and the cheese bubbles.", "Top with fresh basil, slice and serve."],
  },
  {
    id: "toast",
    title: "The Perfect Avo Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Breakfast",
    description: "Creamy avocado, bright lemon and crunchy toast.",
    color: "#e5f0da",
    ingredients: ["2 slices whole-grain bread", "1 ripe avocado", "1 tsp lemon juice", "Pinch of salt", "Chilli flakes, optional"],
    steps: ["Toast the bread until golden and crisp.", "Cut the avocado, remove the pit and scoop the flesh into a bowl.", "Mash with lemon juice and a pinch of salt.", "Spread over the toast and finish with chilli flakes if you like."],
  },
  {
    id: "ramen",
    title: "Cozy Spicy Ramen",
    emoji: "🍜",
    minutes: 25,
    difficulty: "Medium",
    cuisine: "Japanese",
    description: "A warm and flavorful bowl with a little kick.",
    color: "#ffe8d0",
    ingredients: ["2 portions ramen noodles", "3 cups vegetable broth", "1 tbsp soy sauce", "1 tsp chilli paste", "1 cup sliced mushrooms", "1 handful spinach", "Spring onions to serve"],
    steps: ["Bring the vegetable broth to a simmer in a saucepan.", "Stir in soy sauce, chilli paste and mushrooms; cook for 5 minutes.", "Add noodles and cook according to the packet instructions.", "Stir in spinach until just wilted.", "Divide between bowls and top with spring onions."],
  },
  {
    id: "pancakes",
    title: "Berry Fluffy Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Breakfast",
    description: "Soft golden stacks topped with juicy berries.",
    color: "#f8e0e7",
    ingredients: ["1 cup plain flour", "1 tbsp sugar", "1 tsp baking powder", "1 egg", "3/4 cup milk", "1 tbsp melted butter", "Fresh berries to serve"],
    steps: ["Mix flour, sugar and baking powder in a bowl.", "Whisk egg, milk and melted butter in another bowl.", "Combine wet and dry ingredients without overmixing.", "Cook small portions in a lightly greased pan until bubbles appear; flip and cook the other side.", "Serve with berries."],
  },
  {
    id: "salad",
    title: "Feel-Good Buddha Bowl",
    emoji: "🥗",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Healthy",
    description: "Fresh vegetables and plenty of vibrant flavor.",
    color: "#def0e5",
    ingredients: ["1 cup cooked quinoa or rice", "1 cup cooked chickpeas", "1 carrot, grated", "1/2 cucumber, sliced", "1/2 avocado", "2 tbsp plain yoghurt", "1 tsp lemon juice"],
    steps: ["Cook quinoa or rice and let it cool slightly.", "Rinse and drain the chickpeas.", "Arrange the grain, chickpeas and vegetables in a bowl.", "Mix yoghurt and lemon juice for a simple dressing.", "Drizzle over the bowl and serve."],
  },
  {
    id: "cookies",
    title: "Gooey Chocolate Cookies",
    emoji: "🍪",
    minutes: 28,
    difficulty: "Easy",
    cuisine: "Dessert",
    description: "Crispy edges and soft chocolate-chip centers.",
    color: "#f4e1cf",
    ingredients: ["1 cup plain flour", "1/2 tsp baking soda", "1/3 cup softened butter", "1/2 cup brown sugar", "1 egg", "1/2 cup chocolate chips"],
    steps: ["Preheat the oven to 180°C and line a baking tray.", "Cream the butter and sugar, then mix in the egg.", "Fold in flour and baking soda, followed by chocolate chips.", "Scoop the dough onto the tray, leaving space between cookies.", "Bake for 10–12 minutes until the edges are golden, then cool briefly."],
  },
  {
    id: "tacos",
    title: "Taco Tuesday, Anytime",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    description: "Bright, zesty tacos for any night of the week.",
    color: "#f3ecd2",
    ingredients: ["4 small tortillas", "1 cup cooked black beans", "1/2 tsp cumin", "1 tomato, chopped", "1/2 cup shredded lettuce", "1/2 cup grated cheese", "1 lime"],
    steps: ["Warm the beans with cumin in a small pan.", "Heat the tortillas briefly on a dry skillet.", "Fill each tortilla with beans, tomato, lettuce and cheese.", "Squeeze over lime juice and serve immediately."],
  },
  {
    id: "smoothie",
    title: "Sunshine Mango Smoothie",
    emoji: "🥭",
    minutes: 5,
    difficulty: "Easy",
    cuisine: "Drinks",
    description: "A refreshing five-minute tropical treat.",
    color: "#fff0c9",
    ingredients: ["1 cup chopped ripe mango", "1/2 banana", "3/4 cup cold milk or plant milk", "1/4 cup plain yoghurt", "A few ice cubes"],
    steps: ["Put mango, banana, milk and yoghurt into a blender.", "Add ice cubes and blend until completely smooth.", "Taste and adjust the thickness with a little more milk.", "Pour into a glass and enjoy immediately."],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
