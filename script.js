const product1 = document.getElementById('product1');
const product2 = document.getElementById('product2');

const setaRight = document.getElementById('right');
const setaLeft  = document.getElementById('left');

setaLeft.addEventListener('click', () => {
    product1.style.left= '125px'
    product2.style.left='-600px'
})
setaRight.addEventListener('click', () => {
    product1.style.left= '-600px'
    product2.style.left='125px'
})