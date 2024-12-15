


// ////
const answersElem = document.querySelectorAll('.answer');
answersElem.forEach((currElem)=>{
currElem.addEventListener('click' , ()=>{
    const getcontrol = currElem.getAttribute('aria-controls');
    const getTab = document.getElementById(getcontrol);
    const getplus = currElem.querySelectorAll('i')[0];
    getTab.classList.toggle('hidden');
    getplus.classList.toggle('fa-x');
})
})