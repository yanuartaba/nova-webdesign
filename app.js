
document.addEventListener("DOMContentLoaded", () => {
    autoPick(true);
});

let i = 1;

function autoPick(e){    
    if(e === true){       
        sliderAuto;
    }else{
        clearInterval(sliderAuto);
    };
} 

sliderAuto = setInterval(() => {        
    i++;
    if(i == 4 ? i = 1 : i);
    pickId(i);
}, 2000)

function slide(e) {
    autoPick(false);
    return  pickId(e); 
}

function pickId(e) {
    switch (e) {
        case 1:
            document.getElementById('person_1').classList.remove('hidden')
            document.getElementById('person_2').classList.add('hidden')
            document.getElementById('person_3').classList.add('hidden')
            break;    
        case 2:
            document.getElementById('person_1').classList.add('hidden')
            document.getElementById('person_2').classList.remove('hidden')
            document.getElementById('person_3').classList.add('hidden')
            break;
        default:
            document.getElementById('person_1').classList.add('hidden')
            document.getElementById('person_2').classList.add('hidden')
            document.getElementById('person_3').classList.remove('hidden')
            break;
    }
}

function showHamburgerMenu(){  
    let heroQuery = document.querySelector('.big-wrapper');

    heroQuery.classList.add('active');
}

function closeHamburgerMenu() {
    let heroQuery = document.querySelector('.big-wrapper');

    heroQuery.classList.remove('active');
}

