
export let contactBot = document.getElementById('contact');
export const contactPage = () =>{
    let content = document.getElementById('content');
    let title = document.createElement('h1');
    title.className= 'title';
    title.appendChild(document.createTextNode('CONTACT US'));
    content.appendChild(title);
    let texOne = document.createElement('p');
    texOne.className= 'text';
    texOne.appendChild(document.createTextNode('Yaounde Cameroon, -237 777-77-77-77'));
    content.appendChild(texOne);
    let subtitle = document.createElement('h2');
    subtitle.className = 'subtitle';
    subtitle.appendChild(document.createTextNode('Get in touch'));
    content.appendChild(subtitle);
};