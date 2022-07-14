window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})
document.querySelectorAll('.nav__menu li a').forEach(link => {
    if(link.href === window.location.href){
      link.setAttribute('aria-current', 'page')
    }
  })
const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq =>{
    faq.addEventListener('click',   ()=>{
        faq.classList.toggle('open')
        const icon = faq.querySelector('.faq__icon i')
        if(icon.className==='uil uil-plus'){
            icon.className = 'uil uil-minus'
        }else{
            icon.className = 'uil uil-plus'
        }
    })
})
const menu = document.querySelector('.nav__menu')
const menubtn = document.querySelector('#open-menu-btn')
const closebtn = document.querySelector('#close-menu-btn')
menubtn.addEventListener('click',()=>{
    menu.style.display="flex"
    closebtn.style.display="inline-block"
    menubtn.style.display="none"
    
})
closebtn.addEventListener('click',()=>{
    menu.style.display="none"
    closebtn.style.display="none"
    menubtn.style.display="inline-block"
    
})