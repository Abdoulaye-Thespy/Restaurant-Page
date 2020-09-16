export let menuBot = document.getElementById('menu');
export const menuPage = () =>{
    let content = document.getElementById('content');
    let title = document.createElement('h1');
    title.className= 'title';
    title.appendChild(document.createTextNode('MENU'));
    content.appendChild(title);
    let texOne = document.createElement('p');
    texOne.className= 'text';
    texOne.appendChild(document.createTextNode('Yaounde Cameroon, -237 777-77-77-77'));
    content.appendChild(texOne);
    let subtitle = document.createElement('h2');
    subtitle.className = 'subtitle';
    subtitle.appendChild(document.createTextNode('MOST POPULAR'));
    content.appendChild(subtitle);
};