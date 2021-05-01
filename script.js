const button1 = document.querySelector('.back-this-project');
const bookmarkButton = document.querySelector('.bookmark');
const backThisProjectWindow = document.querySelector('.pledge_button');
const closeBtn = document.querySelector('.close_btn');
const secondContainer = document.querySelector('.container_2');
const bookmarkLogo = document.querySelector('.svg_circle')
const gotItBtn = document.querySelector('.got_it');
const supportWindow = document.querySelector('.support_window');
const continueBtn = document.querySelector('.Continue');
const checkBoxes = document.querySelector('.allCheckBoxes');
const pledgeButton = document.querySelector('.pledge_button');
const boxStyling = document.querySelector('.box-styling');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger');


let count = 0;
button1.addEventListener('click',(clicked)=>{
    backThisProjectWindow.style.visibility = 'visible';
    secondContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.37)';
});

closeBtn.addEventListener('click',(clicked)=>{
    backThisProjectWindow.style.visibility = 'hidden';
})

gotItBtn.addEventListener('click',(clckEvent)=>{
    supportWindow.style.visibility = 'hidden';
});

continueBtn.addEventListener('click',(clicked)=>{
    supportWindow.style.visibility = 'visible';
    backThisProjectWindow.style.visibility = 'hidden';
});

bookmarkButton.addEventListener('click',(clickedEvent)=>{
    count++;
    let currEvent = count % 2 === 0 ? 'Bookmark':'Bookmarked';
    bookmarkButton.innerHTML = currEvent;
    if (currEvent === 'Bookmarked'){
        bookmarkButton.style.color = 'hsl(0, 0%, 48%)';
        bookmarkLogo.style.fill = 'hsl(0, 0%, 48%)';
    }else{
        bookmarkButton.style.color = 'hsl(176, 72%, 28%)';
        bookmarkLogo.style.fill = 'hsl(176, 72%, 28%)';
    }

});

let currentCheckBox = checkBoxes.childNodes;

for (let currIndex = 0; currIndex < currentCheckBox.length; currIndex++){
    if (currIndex % 2 === 1){
        console.log(currentCheckBox[currIndex])
    }
    
}

boxStyling.addEventListener('click',(e)=>{
    boxStyling.style.boxShadow = '1px solid hsl(176, 50%, 47%)'
})

hamburgerIcon.addEventListener('click',(e)=>{
    count++;
    let currEvent = count % 2 === 0 ? 'visible':'hidden';
    
    if (currEvent === 'disable'){
        hamburgerMenu.style.visibility = currEvent;
        
    }else{
        hamburgerMenu.style.visibility = currEvent;
    }
})