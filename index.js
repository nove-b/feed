const overviewTrigers = document.querySelectorAll('.js-open-overview')
if (overviewTrigers.length > 0) {
  overviewTrigers.forEach((overviewTriger) => {
    overviewTriger.addEventListener('mouseenter', (event) => {
      console.log(event.nextElementSibling)
      const overview = event.nextElementSibling
      overview.classlist.classlist.add('show')
    })
  })
}