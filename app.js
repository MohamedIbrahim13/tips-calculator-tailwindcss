const dollarInput = document.querySelector(".bill")
const personInput = document.querySelector(".person")
const percentages = document.querySelectorAll(".grid input")
const amount = document.querySelector(".tip-total")
const total = document.querySelector(".total-amount")
const resetBtn = document.querySelector(".reset-btn")

dollarInput.addEventListener("keyup", e => {
  e.preventDefault()
  const bill = dollarInput.value.trim()
  updateUi(bill)
})

personInput.addEventListener("keyup", checkNumOfPerson)

resetBtn.addEventListener("click", () => {
  dollarInput.value = ""
  personInput.value = ""
  percentages[percentages.length - 1].value = ""
  amount.textContent = "$0"
  total.textContent = "$0"
  resetBtn.disabled = true
})

function updateUi(bill) {
  let totalPerPerson = 0
  let totalPerAll = 0
  percentages.forEach(btn => {
    btn.addEventListener("click", e => {
      const singlePercentage = parseFloat(btn.value.replace("$", "")) * bill
      if (isNaN(personInput.value) || personInput.value <= 0) {
        personInput.value = 1
      }
      const personsPercentage = singlePercentage * personInput.value.trim()
      totalPerPerson = Math.round(singlePercentage) / 100
      totalPerAll = Math.round(personsPercentage) / 100
      amount.textContent = "$" + totalPerPerson
      total.textContent = "$" + totalPerAll
    })
  })
}

function checkNumOfPerson(e) {
  e.preventDefault()

  const input = e.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  const totalPerAll = total.textContent.replace("$", "") * input.value.trim()
  total.textContent = "$" + totalPerAll
}
