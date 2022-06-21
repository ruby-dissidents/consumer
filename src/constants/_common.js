const colors = [
  "#42ff9a",
  "#2B2B2B",
  "#bac66a",
  "#9ACF30",
  "#fbca61",
  "#AAFF42FF",
  "#42FF9AFF",
  "#C66A6AFF",
  "#BAC66AFF",
  "#71e75f",
]

export function getRandomColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return {
    backgroundColor: randomColor,
  }
}
