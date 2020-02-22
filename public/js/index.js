let menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(menulink => menulink.addEventListener('click', toggleActive));

function toggleActive(e) {
    let link = document.querySelector('.active');

    if (link) {
        link.classList.remove('active');
        console.log ('clicked')
    }
    e.target.classList.add('active');
}

let menuBtn = document.querySelector ('.menu-toggle');

  menuBtn.addEventListener('click', toggleMenu);
  
  function toggleMenu(e) {
    let menu = document.querySelector('.menu');

    menu.classList.toggle('show');

    let lineOne = document.querySelector('#line-1');
    let lineTwo = document.querySelector('#line-2');
    let lineThree = document.querySelector('#line-3');

    lineOne.classList.toggle('line-1');
    lineTwo.classList.toggle('line-2');
    lineThree.classList.toggle('line-3');

    console.log(menu);
    /* else if {
      menu.classList.add('show');
    } */
    
  }
  