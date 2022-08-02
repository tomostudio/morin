// Regex untuk get ID Youtube
const getYoutube = (value) => {
  var regEx =
    '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)'
  var matches = value.match(regEx)
  return matches[1]
}

export default getYoutube
