let _openMenu = document.getElementsByClassName('openMenu')[0]
let _close = document.getElementsByClassName('close')[0]
let _subMenu = document.querySelector('.openMenu>section')
console.log(_close);

let flag = 1;
_openMenu.addEventListener('click', ()=>{
    if(flag % 2){

        _subMenu.className= 'd-flex row bg-light shadow position-absolute top-0 start-0 w-50 '
        console.log('add', flag);
    } else{
        _close.addEventListener('click', ()=>{
            //   _subMenu
            //   alert(_subMenu)
            // if(flag % 2){
            
                _subMenu.remove()
                // flag++
            // }
            
            })
    }
    flag++
    console.log(flag);

    // _close.className = 'd-flex justify-content-end pt-3 pe-3'

})




// owl
$('.owl-carousel.slider_carousel').owlCarousel({
    loop:true,
    dots: true,
    margin:30,
    stagePadding:2,
    autoplay: true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items: 1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1200:{
            items:3
        },
        1400:{
            items: 4
        }
    }
})