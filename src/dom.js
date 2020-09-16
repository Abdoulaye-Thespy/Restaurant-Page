export const pageLoad = () =>{
    let content = document.getElementById('content');
    let title = document.createElement('h1');
    title.className= 'title';
    title.appendChild(document.createTextNode('AFRO RESTAURANT'));
    content.appendChild(title);
    let texOne = document.createElement('p');
    texOne.className= 'text';
    texOne.appendChild(document.createTextNode('Afro Deli is an urban fast-casual restaurant that provides a delicious fusion of African, Mediterranean, and American themed food in a fast, fun, and friendly environment'));
    content.appendChild(texOne);
    let subtitle = document.createElement('h2');
    subtitle.className = 'subtitle';
    subtitle.appendChild(document.createTextNode('We also cater all types of events'));
    content.appendChild(subtitle);
    let textTwo = document.createElement('p');
    textTwo.className = 'text';
    textTwo.appendChild(document.createTextNode('No matter small or large, we can accomodate your next event. We can create a customized meal that will adhere to every dietary need. Think of us for your next wedding, conference, or other large event'));
    content.appendChild(textTwo);
    
    document.getElementById('footer').innerHTML = `<footer class="page-footer font-small blue">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <p>AbdoulayeTheSpy</p>
  </div>
  <!-- Copyright -->

</footer>`;
}

