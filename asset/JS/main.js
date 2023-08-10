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


