let currentValue = 1
const pluralDemo1 = document.getElementById('plural-demo1')

const tPlural = pluralDemo1.children[0]
const divInfo = pluralDemo1.children[1]
const button = pluralDemo1.children[2].children[0]

function updateCount () {
  tPlural.setAttribute('count', currentValue)
  tPlural.getElementsByTagName('t-param')[0].innerHTML = currentValue
  divInfo.innerHTML = `Current count: ${currentValue}`
}

updateCount()

button.addEventListener('click', (ev) => {
  currentValue += 1
  if (currentValue > 4) {
    currentValue = 0
  }
  updateCount()
})
