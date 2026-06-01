let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0]
let result = document.getElementById("result")

function calculateAge() {
    let birthDate = new Date(userInput.value)
    let today = new Date()

    let birthY = birthDate.getFullYear()
    let birthM = birthDate.getMonth()
    let birthD = birthDate.getDate()

    let todayY = today.getFullYear()
    let todayM = today.getMonth()
    let todayD = today.getDate()

    let year  = todayY - birthY 
    let month = todayM - birthM 
    let day   = todayD - birthD 

    if (day < 0) {
        month--
        day += getDaysInMonth(year, month)
    } else if (month < 0) {
        year--
        month += 12
    }

    if (userInput) {
        result.innerHTML = `You are ${year} Years ${month} Months and ${day} Days old`
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
}