import img from './chef.jpg';

const content = document.querySelector('#content');
const header = document.createElement('div');
const title = document.createElement('div');
const nav = document.createElement('div');
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');
const body = document.createElement('div');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const chefImg = new Image();
const p3 = document.createElement('p');
const footer = document.createElement('div');

title.textContent = 'Mozzafiato';
home.textContent = 'Home';
menu.textContent = 'Menu';
contact.textContent = 'Contact';
p1.textContent = 'Best pizza in your country';
p2.textContent = 'Made with passion since 1908';
chefImg.src = img;
p3.textContent = 'Order online or visit us!';


content.appendChild(header);
header.appendChild(title);
header.appendChild(nav);
nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);
content.appendChild(body);
body.appendChild(p1);
body.appendChild(p2);
body.appendChild(chefImg);
body.appendChild(p3);
content.appendChild(footer);