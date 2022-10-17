let convertBtn = document.getElementById("button")
let inputEl = document.getElementById("inp")
let lengthEl = document.getElementById("length-el")
let VolumeEl = document.getElementById("volume-el")
let MassEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet` 
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    VolumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} liters` 
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    MassEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(2)} pounds` 
})
