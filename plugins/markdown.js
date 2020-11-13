const marked = require('marked')

export default ({ app, store }, inject) => {
  inject('md', (value, inline) => {
    if (!value) return ''
    if (inline) return marked.parseInline(value.toString())
    return marked(value.toString())
  })
}
