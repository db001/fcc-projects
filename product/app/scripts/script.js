const burger = document.getElementById('hamburger');
const links = document.getElementById('links');

function burgerTransform() {
  burger.classList.toggle('open');
  if (burger.classList.contains('open')) {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
  } else {
    links.style.display = 'none';    
  }
}


function onResize() {
  if(window.innerWidth >= 800) {
    links.style.display = "flex";
    links.style.flexDirection = 'row';
    burger.style.display = 'none';
  }
}

burger.addEventListener('click', burgerTransform);
window.addEventListener('resize', onResize);

/*

To do:  Fix this so it scrolls to the link rather than jumping

const nav = document.getElementsByClassName('nav-link');

function getTop() {
  const target = this.dataset.link;
  const scrollTarget = document.getElementById(target);
  const rect = scrollTarget.getBoundingClientRect();
  setTimeout(function() {
    window.scrollTo(0, rect.top);
  }, 1)  
}

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener('click', getTop);
}

*/