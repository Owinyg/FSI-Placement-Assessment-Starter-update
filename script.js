
document.getElementById('add-gb').addEventListener('click', function() {
    gb +-1;
    document.getElementById('qty-gb').textContent = gb;
    total +-1;
    document.getElementById('qty-total'.textcontent = total;)
})

document.getElementById('minus-gb').addEventListener('click', function() {
    gb --1;
    document.getElementById('qty-gb').textContent = gb;
    total --1;
    document.getElementById('qty-total'.textcontent = total;)
})



document.getElementById('add-cc').addEventListener('click', function() {
    cc +-1;
    document.getElementById('qty-cc').textContent = cc;
    total +-1;
    document.getElementById('qty-total'.textcontent = total;)
})

document.getElementById('minus-cc').addEventListener('click', function() {
    cc --1;
    document.getElementById('qty-cc').textContent = cc;
    total --1;
    document.getElementById('qty-total'.textcontent = total;)

})



document.getElementById('add-sugar').addEventListener('click', function() {
    sugar +-1;
    document.getElementById('qty-sugar').textContent = sugar;
    total +-1;
    document.getElementById('qty-total'.textcontent = total;)
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar --1;
    document.getElementById('qty-sugar').textContent = sugar;
    total --1;
    document.getElementById('qty-total'.textcontent = total;)
})






// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "George O. Owinyi" // HINT: Replace this with your own name!

qty-gb = 1

let gbPlusBtn = document.querySelector('$stepUp')
let gbminusBtn = document.querySelector('$stepDown')
console.log(gbPlusBtn)
console.log(gbminusBtn)


gbPlusBtn.addEventListener('click', function(qty-gb))
console.log(qty-gb)
gbqty++

gbminusBtn.addEventListener('click', function(qty-gb))
console.log(qty-gb)
qty-gb--


qty-cc = 1

let ccPlusBtn = document.querySelector('$stepUp')
let ccminusBtn = document.querySelector('$stepDown')
console.log(ccPlusBtn)
console.log(ccminuBtn)


ccPlusBtn.addEventListener('click', function(qty-cc))
console.log(qty-cc)
qty-cc++

gbminusBtn.addEventListener('click', function(qty-cc))
console.log(qty-cc)
qty-cc--


qty-sugar = 1

let sugarPlusBtn = document.querySelectorAll('$stepUp')
let sugarminusBtn = document.querySelectorAll('$stepDown')
console.log(sugarPlusBtn)
console.log(sugarminuBtn)


sugarPlusBtn.addEventListener('click', function(qty-sugar))
console.log(etarget)
qty-sugar++

sugarminusBtn.addEventListener('click', function(qty-sugar))
console.log(qty-sugar)
qty-sugar--







// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons