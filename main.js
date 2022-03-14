let rows = document.querySelector(".seat-rows")
let selected__move = document.querySelector("#selected")
let text__inforeservation = document.querySelector(".information")
function selected(){
    this.classList.toggle("seat-selected")
    accountingPrice()
}

function addEvent(seat){
    seat.addEventListener("click" , selected)
}
// creaete row and seates
function createSeats(row) {
    let seat = document.createElement("div")
    seat.classList.add("seat")
    addEvent(seat)
    row.appendChild(seat)
}

function createNoneSeats(row) {
    let seat = document.createElement("div")
    seat.classList.add("seat")
    seat.classList.add("seat-none")
    row.appendChild(seat)
}

function createRows(rowNumber) {
    for(let i = 1; i <= rowNumber; i++) {
        let row = document.createElement("div")
        row.classList.add("seat-row")
        rows.appendChild(row)
        for (let i = 1; i <= 12; i++) {
            if(i == 3 || i == 7) {
                createNoneSeats(row)
            }else{
                createSeats(row)
            }
        }
    }
}

// accounting price
function accountingPrice(){
    let seat__selected = document.querySelectorAll(".seat-rows .seat-selected")
    let price = seat__selected.length * selected__move.value
    text__inforeservation.innerHTML = `<p class="text-[1.1rem] information__text">You have selected <span class="text-blue-300">${seat__selected.length}</span> seats for a price of <span class="text-blue-300">${price}</span> $</p>`
}

selected__move.addEventListener("change", accountingPrice)
window.addEventListener("load", createRows(5))
window.addEventListener("load", accountingPrice)