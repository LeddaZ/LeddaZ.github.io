$(document).ready(function () {
  let lastCrisis = new Date('07/21/2022')
  let today = new Date()
  let difference = today.getTime() - lastCrisis.getTime()
  let days = Math.ceil(difference / (1000 * 3600 * 24))

  let day = lastCrisis.getDate()
  if (day < 10) day = '0' + day

  let month = lastCrisis.getMonth() + 1
  if (month < 10) month = '0' + month

  let year = lastCrisis.getFullYear()

  $('#lastCrisisDate').html($('#lastCrisisDate').html() + year + '/' + month + '/' + day + '.')
  $('#counter').html(days)
})
