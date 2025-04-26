//animate number

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;
window.addEventListener("scroll", () => {
    // const scrollable = document. documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    // if(Math.ceil(scrolled)==scrollable)
    if(Math.ceil(scrolled)){
        counterNum.forEach((curElem) => {
            const updateNumber = () =>{
                const targetNumber = parseInt(curElem.dataset.number); 
                
                const initialNum = parseInt(curElem.innerText);
        
        
                const incrementNumber = Math.trunc(targetNumber/ speed);
        
                if(initialNum < targetNumber){
                    curElem.innerText = `${initialNum + incrementNumber}+`;
        
                    setTimeout(updateNumber, 10);
                 }
            }
        
            updateNumber();
        })

    }

});

