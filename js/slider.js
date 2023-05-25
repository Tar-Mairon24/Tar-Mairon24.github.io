(function(){

    const sliders = [...document.querySelectorAll('.practica__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentPractica = document.querySelector('.practica__body--show').dataset.id;
        value = Number(currentPractica);
        value += add;

        sliders[Number(currentPractica) - 1].classList.remove('practica__body--show')
    
        if(value === sliders.length + 1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[value-1].classList.add('practica__body--show');
    }

})();