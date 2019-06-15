export default function getCourseItems(courseItems, courseType = 0) {
  let items = courseItems.filter(res => {
    return res.courseType.includes(courseType)
  })
  return items
}
