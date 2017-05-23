const burger = document.getElementById('hamburger');
const links = document.getElementById('links');

// console.log(links);

function burgerTransform() {
  burger.classList.toggle('open');
  if (burger.classList.contains('open')) {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';

  } else {
    links.style.display = 'none';    
  }
}

burger.addEventListener('click', burgerTransform);