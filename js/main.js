const burger = document.querySelector('.bg')
const left = document.querySelector('.burger')
const light = document.querySelector('.header__light')
const txt = document.querySelectorAll('.txt')
const press = document.querySelectorAll('.jd')

burger.addEventListener('click', () => {
    if(burger.innerHTML==='<i class="fa-sharp fa-solid fa-bars"></i>'){
        burger.style.marginLeft = '20vw';
        burger.style.transition = 'all 0.3s ease-in-out'
        burger.style.marginRight = '20vw'
        left.style.left = '0';
        left.style.transition = 'all 0.3s ease-in-out'
        burger.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>'
        burger.style.width = '79px'
    }else if(burger.innerHTML==='<i class="fa-sharp fa-solid fa-xmark"></i>'){
        burger.style.marginLeft = '0';
        left.style.left = '-20vw'
        burger.innerHTML = '<i class="fa-sharp fa-solid fa-bars"></i>'
        burger.style.marginRight = '40vw'
    }
});

document.querySelector('.tytman').addEventListener('click', () => {
    window.location.reload()
});

light.addEventListener('click', () => {
    if(light.innerHTML==='<i class="fa-sharp fa-solid fa-moon"></i>'){
        document.body.style.backgroundColor = 'rgb(50, 50, 50)'
        light.innerHTML = '<i class="fa-solid fa-sun"></i>';
        for(let i = 0; i < txt.length; i++) {
            txt[i].style.color = 'white'
        }
    } else if(light.innerHTML==='<i class="fa-solid fa-sun"></i>'){
        document.body.style.backgroundColor = 'white';
        light.innerHTML = '<i class="fa-sharp fa-solid fa-moon"></i>'
        for(let i = 0; i < txt.length; i++) {
            txt[i].style.color = 'black'
        }
    }
})

document.querySelector('.news').addEventListener('click', () => {
    document.querySelector('.container__news').scrollIntoView({
      behavior: 'smooth'
    });
  });

document.querySelector('.guide').addEventListener('click', () =>{
    document.querySelector('.container__guide').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.info').addEventListener('click', () =>{
    document.querySelector('.container').scrollIntoView({
        behavior: 'smooth'
    })
})

// for (let i = 0; i < press.length; i++) {
//     press[i].addEventListener("click", function() {
//       document.body.classList.toggle("blur");
//       const mis = document.createElement('img');
//       mis.src = press[i].getAttribute('src');;
//       mis.classList.add("modal");
//     });
// }