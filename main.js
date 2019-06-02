const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['text1', 'text2', 'text3']

let activeLetter = -7; //letter in selected word
let activeText = 0; //index in an array    

// Implementacjon
const addLetter = () => {
  if (activeLetter >= 0) {
    spnText.textContent += txt[activeText][activeLetter];
  }
  activeLetter++
  if (activeLetter === txt[activeText].length) {
    activeText++
    if (activeText === txt.length) return;
    return setTimeout(() => {
      activeLetter = 0;
      spnText.textContent = '';
      addLetter()
    }, 2000)
  }
  setTimeout(addLetter, 150)
}

addLetter();


// cursor animation 
const cursorAnimation = () => {
  spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);