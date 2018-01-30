var html = require('choo/html')

module.exports = view

function view (state, emit) {
  return html`
    <body class="sans-serif">
      <h1 class="f-headline pa3 pa4-ns" onclick=${onclick}>
        forward
      </h1>
    </body>
  `

  function onclick () {
    emit('pushState', '/forward')
  }
}
