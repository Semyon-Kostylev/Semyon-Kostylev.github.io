const sumSlider = document.getElementById('sum')
const sumNumber = document.getElementById('sum-number')
const timeSlider = document.getElementById('time')
const timeNumber = document.getElementById('time-number')

noUiSlider.create(sumSlider, {
  start: 0,
  connect: [true, false],
  step: 100,
  range: {
    'min': 15000,
    'max': 1000000
  }
})

noUiSlider.create(timeSlider, {
  start: 0,
  connect: [true, false],
  range: {
    'min': 2,
    'max': 12
  }
})

const diff = document.getElementById('diff')
const ann = document.getElementById('ann')
const sumPerMonth = document.getElementById('sum-per-month')

function calculation() {
  money = Math.round(sumSlider.noUiSlider.get())
  month = Math.round(timeSlider.noUiSlider.get())
  if (diff.classList.contains('chosen')) {
    total = Math.round(percent * money)
  } else {
    total = money * percent * Math.pow(1 + percent, month) / (Math.pow(1 + percent, month) - 1)
  }

  sumPerMonth.innerHTML = Math.round(String(total)) + ' ' + '&#8381'
}

diff.onclick = () => {
  diff.classList.add('chosen')
  ann.classList.remove('chosen')
  calculation()
}

ann.onclick = () => {
  ann.classList.add('chosen')
  diff.classList.remove('chosen')
  calculation()
}

let money = sumSlider.noUiSlider.get()
let month = timeSlider.noUiSlider.get()
let percent = 0.027
let total

sumSlider.noUiSlider.on('update', () =>  {
  calculation()
  sumNumber.innerHTML = Math.round(money) + ' ' + '&#8381'
})

timeSlider.noUiSlider.on('update', () =>  {
  calculation()
  timeNumber.innerHTML = Math.round(month) + ' ' + 'месяцев'
});


