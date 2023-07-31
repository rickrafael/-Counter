const counterBtn = document.querySelector('.button-init-counter')
 const stopBtn = document.querySelector('.button-stop-counter')
 const counterTitle = document.querySelector('h1')
 
 counterBtn.addEventListener('click', () => {
  let counter = 0

  const timer = setInterval(()=>{
    counter ++
    counterTitle.textContent = `${counter}%`
  },100)

  
 stopBtn.addEventListener('click', ()=>{
  counterTitle.textContent = `0 %`
  clearInterval(timer)

}) 


 })