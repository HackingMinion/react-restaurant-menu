export default function getItemIndex(selectedItems, id) {
  return selectedItems.findIndex(item => item.id === id)
}
