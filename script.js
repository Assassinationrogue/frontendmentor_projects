const button1 = document.querySelector('.back-this-project');
const bookmarkButton = document.querySelector('.bookmark');

let count = 0;

button1.addEventListener('click',(clicked)=>{
    count++;
    let currEvent = count % 2 === 0 ? 'disabled':'enabled';
    console.log(currEvent)
});


bookmarkButton.addEventListener('click',(clicked)=>{
    count++;
    let currEvent = count % 2 === 0 ? 'disabled':'enabled';
    console.log(currEvent)
})