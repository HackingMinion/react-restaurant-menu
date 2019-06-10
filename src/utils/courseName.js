export default function getCourseName(number) {
  const courses = {
    0: "Hors d'oeuvres",
    1: "Soup",
    2: "Fish",
    3: "Salad",
    4: "Main Course",
    5: "Dessert"
  }
  return courses[number]
}
