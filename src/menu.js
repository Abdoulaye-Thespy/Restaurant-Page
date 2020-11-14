export const menuBot = document.getElementById('menu');
export const menuPage = () => {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  title.className = 'title';
  title.appendChild(document.createTextNode('MENU'));
  content.appendChild(title);
  const texOne = document.createElement('p');
  texOne.className = 'text';
  texOne.appendChild(document.createTextNode('Yaounde Cameroon, -237 777-77-77-77'));
  content.appendChild(texOne);
  const subtitle = document.createElement('h2');
  subtitle.className = 'subtitle';
  subtitle.appendChild(document.createTextNode('MOST POPULAR'));
  content.appendChild(subtitle);
};