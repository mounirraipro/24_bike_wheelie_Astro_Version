export const brandAccentClass = "accent-orange";

export const getGameAccentClass = (category: string) => {
  const key = category.toLowerCase();
  if (key.includes("bike")) return "accent-orange";
  if (key.includes("motor")) return "accent-coral";
  if (key.includes("racing")) return "accent-blue";
  if (key.includes("stunt")) return "accent-violet";
  if (key.includes("physics")) return "accent-green";
  return brandAccentClass;
};
