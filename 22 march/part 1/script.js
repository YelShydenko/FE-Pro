const countValue = document.querySelector('#counter')
// const btnDecrease = document.querySelector('.decrease')
// const btnReset = document.querySelector('.reset')
// const btnIncrease = document.querySelector('.increase')
const buttons = document.querySelectorAll('.btn')

let count = 0;

buttons.forEach(function(btn){
   btn.addEventListener('click', function (event) {
      const classes = event.currentTarget.classList
      if (classes.contains('decrease')) {
         count--
      }else if (classes.contains('increase')) {
         count++
      } else {
         count = 0
      }
      if (count > 0) {
         countValue.style.color = 'green'
      }
      if (count < 0) {
         countValue.style.color = 'red'
      }
      if (count == 0) {
         countValue.style.color = 'black'
      }
      countValue.textContent = count;
   })
})

