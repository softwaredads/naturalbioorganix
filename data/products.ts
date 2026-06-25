export type ProductCategory = "hair-care" | "hair-color" | "body-care";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  size: string;
  description: string;
  benefits: string[];
  badges: string[];
};

export const products: Product[] = [
  {
    id: "hair-growth-oil",
    name: "Ayurvedic Jadibuti Hair Growth Oil",
    category: "hair-care",
    image: "/products/hair-growth-oil.jpeg",
    size: "200ml",
    description:
      "A powerful Ayurvedic blend of natural herbs and oils that nourishes hair from root to tip. Formulated with time-tested jadibuti ingredients for visibly stronger, thicker, and shinier hair.",
    benefits: [
      "Reduces hair fall",
      "Promotes hair growth",
      "Stronger & thicker hair",
      "Adds shine & gloss",
    ],
    badges: ["100% Organic", "Ayurvedic", "Chemical Free", "Cruelty Free"],
  },
  {
    id: "natural-black-shampoo",
    name: "Natural Black Hair Coloring Shampoo",
    category: "hair-color",
    image: "/products/natural-black-coloring-shampoo.jpeg",
    size: "200ml",
    description:
      "Achieve rich, natural black color in just 10 minutes with this ammonia-free coloring shampoo. Infused with olive and argan extracts for professional results without harsh chemicals.",
    benefits: [
      "Natural black shade",
      "Ammonia free formula",
      "10-minute application",
      "For all hair types",
    ],
    badges: ["Ammonia Free", "Natural Ingredients", "10 Min Application"],
  },
  {
    id: "natural-brown-shampoo",
    name: "Natural Brown Hair Coloring Shampoo",
    category: "hair-color",
    image: "/products/natural-brown-coloring-shampoo.jpeg",
    size: "200ml",
    description:
      "Get beautiful, natural brown tones with this gentle coloring shampoo. Free from ammonia and enriched with olive and argan oil for vibrant, healthy-looking color.",
    benefits: [
      "Natural brown shade",
      "Ammonia free formula",
      "10-minute application",
      "Professional care",
    ],
    badges: ["Ammonia Free", "Natural Ingredients", "10 Min Application"],
  },
  {
    id: "keratin-shampoo",
    name: "Keratin Shampoo",
    category: "hair-care",
    image: "/products/keratin-shampoo.jpeg",
    size: "300ml",
    description:
      "Professional Pro-Health formula that gently cleanses while strengthening hair with keratin. Dermatologically safe and free from sulphates, parabens, and phosphates.",
    benefits: [
      "Strengthens hair",
      "Pro-Health formula",
      "Dermatologically safe",
      "For all hair types",
    ],
    badges: ["Sulphate Free", "Paraben Free", "Dermat Safe"],
  },
  {
    id: "keratin-conditioner",
    name: "Keratin Conditioner",
    category: "hair-care",
    image: "/products/Keratin-conditioner.jpeg",
    size: "300ml",
    description:
      "A nourishing and restorative conditioner enriched with Argan Oil and Rice Protein. Deeply conditions while keeping hair color safe and vibrant.",
    benefits: [
      "Nourishing & restorative",
      "Argan oil & rice protein",
      "Color safe formula",
      "Adds softness & shine",
    ],
    badges: ["Argan Oil", "Color Safe", "Paraben Free"],
  },
  {
    id: "cocoa-body-butter",
    name: "Whipped Cocoa Body Butter",
    category: "body-care",
    image: "/products/Cocoa-body-butter.jpeg",
    size: "200g",
    description:
      "Luxuriously whipped cocoa body butter that deeply conditions and relieves dry, sensitive skin. Made with pure natural cocoa butter for lasting hydration and a silky smooth feel.",
    benefits: [
      "Deep conditioning",
      "Relieves dry skin",
      "Pure cocoa butter",
      "Sensitive skin friendly",
    ],
    badges: ["100% Natural", "Whipped Formula", "Deep Moisture"],
  },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "hair-care", label: "Hair Care" },
  { id: "hair-color", label: "Hair Color" },
  { id: "body-care", label: "Body Care" },
] as const;
