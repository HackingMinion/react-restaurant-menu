export default function getCourseItems(data, courseType = 0) {
  let items = data.filter(res => {
    return res.courseType.includes(courseType)
  })
  return items
}
