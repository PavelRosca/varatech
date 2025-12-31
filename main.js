// main.js - meniu mobil și trimitere formular prin mailto
document.addEventListener('DOMContentLoaded', function(){
  // Anul curent în footer
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Toggle nav (mobil)
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', function(){
      nav.classList.toggle('show');
    });
    // inchide nav la click pe link
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){nav.classList.remove('show')});
    });
  }

  // Formular - construiește mailto
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = encodeURIComponent(document.getElementById('name').value || '');
      var email = encodeURIComponent(document.getElementById('email').value || '');
      var phone = encodeURIComponent(document.getElementById('phone').value || '');
      var service = encodeURIComponent(document.getElementById('service').value || '');
      var message = encodeURIComponent(document.getElementById('message').value || '');

      var subject = encodeURIComponent('Cerere ofertă: ' + service + ' — ' + (document.getElementById('name').value || ''));
      var body = 'Nume: ' + decodeURIComponent(name) + '\n';
      body += 'Email: ' + decodeURIComponent(email) + '\n';
      body += 'Telefon: ' + decodeURIComponent(phone) + '\n';
      body += 'Serviciu: ' + decodeURIComponent(service) + '\n\n';
      body += 'Mesaj:\n' + decodeURIComponent(message);

      var mailto = 'mailto:contact@varatech.ro?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
    });
  }
});