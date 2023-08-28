let _openMenu = document.getElementsByClassName('openMenu')[0]
let _close = document.getElementsByClassName('close')[0]
let _subMenu = document.querySelector('.openMenu>section')

let _footIcon = document.querySelectorAll('.footIcon')
let _footList = document.querySelectorAll('.footList')

_footIcon.forEach((val, i)=>{
  
  let flag = 1;
  val.addEventListener('click', ()=>{
      if(flag%2){
        _footList[i].className = 'd-flex list-unstyled row fs-4' 
      } else{
        _footList[i].className = 'd-none'  
      }
      flag++
    }) 
})


let flag = 0
_openMenu.addEventListener('click', ()=>{

  flag++
  if(flag%2){
    _subMenu.className= 'd-flex row bg-light shadow position-absolute top-0 start-0 w-50 '
    console.log('add', _subMenu);
  } 
})
_close.addEventListener('click', ()=>{
   _subMenu.className = 'd-sm-none row bg-light shadow position-absolute top-0 start-0 w-50 ' 
})





// owl
$(".trends").owlCarousel({
    items: 4,
    nav: true,
    loop: true,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
$(".comment").owlCarousel({
    items: 3,
    nav: true,
    loop: true,
    // dots: true,
    mouseDrag: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
    },
  });


