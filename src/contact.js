
export const contactBot = document.getElementById('contact');
export const contactPage = () => {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  title.className = 'title';
  title.appendChild(document.createTextNode('CONTACT US'));
  content.appendChild(title);
  const texOne = document.createElement('p');
  texOne.className = 'text';
  texOne.appendChild(document.createTextNode('Yaounde Cameroon, -237 777-77-77-77'));
  content.appendChild(texOne);
  const subtitle = document.createElement('h2');
  subtitle.className = 'subtitle';
  subtitle.appendChild(document.createTextNode('Get in touch'));
  content.appendChild(subtitle);
  const form = document.createElement('div');
  content.appendChild(form);
  form.innerHTML = `
  <form action="action_page.php" class="contact-form">
    <div>
    <label for="fname">YOUR EMAIL</label><br>
    <input type="email" id="fname" name="firstname" placeholder="email..">
    
    </div>
  <div>
    <label for="subject">Subject</label><br>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
 </div>
    <input type="submit" value="Submit">

  </form>`;
};