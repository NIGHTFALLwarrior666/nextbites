/** One source of truth for the Part 1 homepage's recipe grid. */
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  accent: string;
  bg: string;
  tag?: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Classic Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "A little basil, sweet tomato and lots of cheesy goodness.",
    accent: "#ED8148",
    bg: "#FCE6D8",
    tag: "Crowd favorite",
  },
  {
    id: "avocado-toast",
    title: "The Perfect Avo Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Breakfast",
    description: "Creamy avocado, bright lemon and just the right crunch.",
    accent: "#80A554",
    bg: "#E5EED5",
    tag: "Quick & easy",
  },
  {
    id: "spicy-ramen",
    title: "Cozy Spicy Ramen",
    emoji: "🍜",
    minutes: 25,
    difficulty: "Medium",
    cuisine: "Japanese",
    description: "A warming, slurp-worthy bowl with a flavorful kick.",
    accent: "#D68145",
    bg: "#FFE9D3",
  },
  {
    id: "berry-pancakes",
    title: "Berry Fluffy Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Breakfast",
    description: "Golden stacks, juicy berries and a drizzle of maple syrup.",
    accent: "#BA6984",
    bg: "#F9E2E8",
  },
  {
    id: "green-buddha-bowl",
    title: "Feel-Good Buddha Bowl",
    emoji: "🥗",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Healthy",
    description: "Fresh, colorful and packed with the good stuff.",
    accent: "#5D9D80",
    bg: "#DDEFE6",
    tag: "Fresh pick",
  },
  {
    id: "chocolate-cookies",
    title: "Gooey Chocolate Cookies",
    emoji: "🍪",
    minutes: 28,
    difficulty: "Easy",
    cuisine: "Dessert",
    description: "Crisp edges, soft centers, and melty chocolate chips.",
    accent: "#AA764F",
    bg: "#F2E2CD",
  },
  {
    id: "taco-night",
    title: "Taco Tuesday, Anytime",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    description: "A bright, zesty dinner that everyone can make their own.",
    accent: "#B99B47",
    bg: "#F5EDCF",
  },
  {
    id: "mango-smoothie",
    title: "Sunshine Mango Smoothie",
    emoji: "🥭",
    minutes: 5,
    difficulty: "Easy",
    cuisine: "Drinks",
    description: "A refreshingly tropical five-minute pick-me-up.",
    accent: "#ECA457",
    bg: "#FFF0CF",
    tag: "5-minute magic",
  },
];
