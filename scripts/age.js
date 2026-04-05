$(document).ready(function () {
  let bd = new Date('12/02/2002')
  let today = new Date()
  let diffInMs = today - bd
  let diffInDays = diffInMs / (1000 * 60 * 60 * 24)
  let years = Math.trunc(diffInDays / 365.25)

  $('#age').html(years + ' ' + $('#age').html())
})
