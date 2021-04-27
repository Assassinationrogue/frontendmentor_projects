const button1 = document.querySelector('.back-this-project');
const bookmarkButton = document.querySelector('.bookmark');
const backThisProjectWindow = document.querySelector('.pledge_button');
const closeBtn = document.querySelector('.close_btn');
const secondContainer = document.querySelector('.container_2');
const bookmark = document.querySelector('.bookmark');
const gotItBtn = document.querySelector('.got_it');
const supportWindow = document.querySelector('.support_window');
const continueBtn = document.querySelector('.Continue');

let count = 0;
button1.addEventListener('click',(clicked)=>{
    backThisProjectWindow.style.visibility = 'visible';
    secondContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.37)';
});

closeBtn.addEventListener('click',(clicked)=>{
    backThisProjectWindow.style.visibility = 'hidden';
})


bookmarkButton.addEventListener('click',(clicked)=>{
    count++;
    let currEvent = count % 2 === 0 ? 'hidden':'visible';
    bookmark.style.visibility = currEvent;
    bookmark.style.content = 'Bookmarked'
});

gotItBtn.addEventListener('click',(clckEvent)=>{
    supportWindow.style.visibility = 'hidden';
});

continueBtn.addEventListener('click',(clicked)=>{
    supportWindow.style.visibility = 'visible';
    backThisProjectWindow.style.visibility = 'hidden';
})