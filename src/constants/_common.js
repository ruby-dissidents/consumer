const colors = [
  "#9ACF30",
  "#FFC95C",
  "#5E9DEF",
  "#FF9770",
  "#A894D6",
  "#E56271",
  "#4DA65F",
  "#F7C844",
  "#C3BBFA",
  "#EF8A7B",
  "#5257F6",
  "#9761F6",
]

export function getRandomColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return {
    backgroundColor: randomColor,
  }
}

export function getContent(func) {
  setTimeout(() => func((prevState) => !prevState), Math.floor(Math.random() * 10000))
}
