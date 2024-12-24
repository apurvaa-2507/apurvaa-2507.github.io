const alonebutton=document.getElementById("button-50")
const background=document.getElementById("background")
const popup=document.getElementById("popup")

let randcol;

window.onload = ()=>setRandomBackground(false);
window.addEventListener('keypress',()=> setRandomBackground(true));
alonebutton.addEventListener('click',()=> {
    navigator.clipboard.writeText(randcol);
    popup.classList.remove('hidden');
    setTimeout(()=>{
        popup.classList.add('hidden');
    },1500);
});

function setRandomBackground(change){
    randcol=getRandomColor()
    document.body.style.backgroundColor=randcol;
    alonebutton.style.backgroundColor=randcol;
    if(change) {
        alonebutton.textContent = `${randcol}`;
        alonebutton.ariaValueText=`${randcol}`;
    }
}

function getRandomColor(){
    const letters='0123456789ABCDEF';
    let color='#';
    for (let i = 0; i < 6; i++) {
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}