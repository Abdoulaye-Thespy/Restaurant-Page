!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.className="title",t.appendChild(document.createTextNode("AFRO RESTAURANT")),e.appendChild(t);const n=document.createElement("p");n.className="text",n.appendChild(document.createTextNode("Afro Deli is an urban fast-casual restaurant that provides a delicious fusion of African, Mediterranean, and American themed food in a fast, fun, and friendly environment")),e.appendChild(n);const o=document.createElement("h2");o.className="subtitle",o.appendChild(document.createTextNode("We also cater all types of events")),e.appendChild(o);const a=document.createElement("p");a.className="text",a.appendChild(document.createTextNode("No matter small or large, we can accomodate your next event. We can create a customized meal that will adhere to every dietary need. Think of us for your next wedding, conference, or other large event")),e.appendChild(a),document.getElementById("footer").innerHTML='<footer class="page-footer font-small blue">\n\n  \x3c!-- Copyright --\x3e\n  <div class="footer-copyright text-center py-3">© 2020 Copyright:\n    <p>AbdoulayeTheSpy</p>\n  </div>\n  \x3c!-- Copyright --\x3e\n\n</footer>'},a=document.getElementById("contact"),d=document.getElementById("menu"),c=document.getElementById("content"),r=document.getElementById("home");o();a.addEventListener("click",()=>{c.innerHTML="",(()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.className="title",t.appendChild(document.createTextNode("CONTACT US")),e.appendChild(t);const n=document.createElement("p");n.className="text",n.appendChild(document.createTextNode("Yaounde Cameroon, -237 777-77-77-77")),e.appendChild(n);const o=document.createElement("h2");o.className="subtitle",o.appendChild(document.createTextNode("Get in touch")),e.appendChild(o);const a=document.createElement("div");e.appendChild(a),a.innerHTML='\n  <form action="action_page.php" class="contact-form">\n    <div>\n    <label for="fname">YOUR EMAIL</label><br>\n    <input type="email" id="fname" name="firstname" placeholder="email..">\n    \n    </div>\n  <div>\n    <label for="subject">Subject</label><br>\n    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>\n </div>\n    <input type="submit" value="Submit">\n\n  </form>'})()}),r.addEventListener("click",()=>{c.innerHTML="",o()}),d.addEventListener("click",()=>{c.innerHTML="",(()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.className="title",t.appendChild(document.createTextNode("MENU")),e.appendChild(t);const n=document.createElement("p");n.className="text",n.appendChild(document.createTextNode("Yaounde Cameroon, -237 777-77-77-77")),e.appendChild(n);const o=document.createElement("h2");o.className="subtitle",o.appendChild(document.createTextNode("MOST POPULAR")),e.appendChild(o)})()})}]);