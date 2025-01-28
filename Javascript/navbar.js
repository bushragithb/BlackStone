const navbarContainer=document.getElementById("nav_container");
const navbar=document.createElement("nav")

const navFlex = document.createElement('div');
navFlex.classList.add('nav-flex');

const logoDisplay = document.createElement('a');
logoDisplay.href = '/';
logoDisplay.classList.add('logo-display');

const logoImg = document.createElement('img');
logoImg.classList.add('nav_cart');
logoImg.src = '/Images/logo.png';
logoImg.alt = '';

const navMenu = document.createElement('div');
navMenu.classList.add('nav-menu');
navMenu.id = 'nav-menu';

const navIcons = document.createElement('div');
navIcons.classList.add('nav-icons');
navIcons.id = 'nav-icons';

const shrinkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
shrinkSvg.classList.add('shrink');
shrinkSvg.setAttribute('aria-hidden', 'true');
shrinkSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
shrinkSvg.setAttribute('width', '24');
shrinkSvg.setAttribute('height', '24');
shrinkSvg.setAttribute('fill', 'none');
shrinkSvg.setAttribute('viewBox', '0 0 24 24');

const shrinkPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
shrinkPath.setAttribute('stroke', 'currentColor');
shrinkPath.setAttribute('stroke-linecap', 'round');
shrinkPath.setAttribute('stroke-width', '2');
shrinkPath.setAttribute('d', 'M5 7h14M5 12h14M5 17h14');

shrinkSvg.appendChild(shrinkPath);

const expandSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
expandSvg.classList.add('expand');
expandSvg.setAttribute('aria-hidden', 'true');
expandSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
expandSvg.setAttribute('width', '24');
expandSvg.setAttribute('height', '24');
expandSvg.setAttribute('fill', 'none');
expandSvg.setAttribute('viewBox', '0 0 24 24');

const expandPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
expandPath.setAttribute('stroke', 'currentColor');
expandPath.setAttribute('stroke-linecap', 'round');
expandPath.setAttribute('stroke-linejoin', 'round');
expandPath.setAttribute('stroke-width', '2');
expandPath.setAttribute('d', 'M6 18 17.94 6M18 18 6.06 6');

expandSvg.appendChild(expandPath);

navIcons.appendChild(shrinkSvg);
navIcons.appendChild(expandSvg);
const navList = document.createElement('ul');
const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'Shop', href: '/Files/Shop.html' },
  { text: 'About', href: '/Files/About.html' },
  { text: 'Contact', href: '/Files/Contact.html' },
  { text: "FAQ'S", href: '/Files/Faq.html' }
];

navLinks.forEach(link => {
  const anchor = document.createElement('a');
  anchor.href = link.href;
  anchor.textContent = link.text;

  const listItem = document.createElement('li');
  listItem.appendChild(anchor);

  navList.appendChild(listItem);
});
const logoDisplaySm = document.createElement('a');
logoDisplaySm.href = '/';
logoDisplaySm.classList.add('logo-display-sm');

const logoImgSm = document.createElement('img');
logoImgSm.classList.add('nav_cart');
logoImgSm.src = '/Images/logo.png';
logoImgSm.alt = '';

const cartLink = document.createElement('a');
cartLink.href = '/Files/cart.html';

const iconCart = document.createElement('div');
iconCart.classList.add('icon_cart');

const cartSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
cartSvg.setAttribute('aria-hidden', 'true');
cartSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
cartSvg.setAttribute('fill', 'none');
cartSvg.setAttribute('viewBox', '0 0 24 24');

const cartPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
cartPath.setAttribute('stroke', '#000');
cartPath.setAttribute('stroke-linecap', 'round');
cartPath.setAttribute('stroke-linejoin', 'round');
cartPath.setAttribute('stroke-width', '1');
cartPath.setAttribute('d', 'M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 1 12c0 .5-.5 1-1 1H6a1 1 0 0 1-1-1L6 8h12Z');

const cartText = document.createElement('span');
cartText.id = 'cart_text';
cartText.classList.add('cart_text');
cartText.textContent = '0';

cartSvg.appendChild(cartPath);
iconCart.appendChild(cartSvg);
iconCart.appendChild(cartText);
cartLink.appendChild(iconCart);

logoDisplay.appendChild(logoImg);
navFlex.appendChild(logoDisplay);
navFlex.appendChild(navMenu);
navMenu.appendChild(navIcons);
navMenu.appendChild(navList);
logoDisplaySm.appendChild(logoImgSm);
navFlex.appendChild(logoDisplaySm);
navFlex.appendChild(cartLink);

navbar.appendChild(navFlex);
navbar.appendChild(logoDisplaySm)
navbar.appendChild(cartLink)
navbarContainer.appendChild(navbar)


let accordionNav=document.getElementsByClassName("nav-menu");
for( let i=0;i<accordionNav.length;i++){
  accordionNav[i].addEventListener('click',function(){
    this.classList.toggle('active');
  })
}
