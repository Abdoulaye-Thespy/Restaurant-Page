import { content, pageLoad } from './dom';
import { contactBot, contactPage } from './contact';
import { menuBot, menuPage } from './menu';

const homeBot = document.getElementById('home');

pageLoad();
const contPage = () => {
  content.innerHTML = '';
  contactPage();
};

const homePage = () => {
  content.innerHTML = '';
  pageLoad();
};

const Pagemenu = () => {
  content.innerHTML = '';
  menuPage();
};

contactBot.addEventListener('click', contPage);
homeBot.addEventListener('click', homePage);
menuBot.addEventListener('click', Pagemenu);