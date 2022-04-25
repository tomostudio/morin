import client from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
// Untuk mengolah image sanity
function urlFor(source) {
  return builder.image(source)
}

export default urlFor
