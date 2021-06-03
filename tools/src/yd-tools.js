// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction (props) {
  console.log(props)
  return {
    name: "utils",
    data: props
  }
}
