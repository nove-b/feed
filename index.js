const overviewTrigers = document.querySelectorAll('.js-open-overview')
if (overviewTrigers.length > 0) {
  overviewTrigers.forEach((overviewTriger) => {
    overviewTriger.addEventListener('mouseenter', (event) => {
      console.log(event)
      console.log(event.target.nextElementSibling)
      const overview = event.target.nextElementSibling
      overview.classlist.classlist.add('show')
    })
  })
}